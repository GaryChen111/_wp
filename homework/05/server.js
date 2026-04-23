const express = require('express');
const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');

const app = express();
const DB_PATH = path.join(__dirname, 'blog.db');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let db;

async function initDB() {
  const SQL = await initSqlJs();
  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  saveDB();
}

function saveDB() {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
}

function getPosts() {
  const stmt = db.prepare('SELECT * FROM posts ORDER BY created_at DESC');
  const posts = [];
  while (stmt.step()) {
    posts.push(stmt.getAsObject());
  }
  stmt.free();
  return posts;
}

function getPost(id) {
  const stmt = db.prepare('SELECT * FROM posts WHERE id = ?');
  stmt.bind([id]);
  const post = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  return post;
}

app.get('/', (req, res) => {
  const posts = getPosts();
  res.render('index', { posts });
});

app.get('/post/new', (req, res) => {
  res.render('new');
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
  saveDB();
  res.redirect('/');
});

app.get('/post/:id', (req, res) => {
  const post = getPost(parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.render('post', { post });
});

app.post('/post/:id/delete', (req, res) => {
  db.run('DELETE FROM posts WHERE id = ?', [parseInt(req.params.id)]);
  saveDB();
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
initDB().then(() => {
  app.listen(PORT, () => console.log(`Blog running at http://localhost:${PORT}`));
});
