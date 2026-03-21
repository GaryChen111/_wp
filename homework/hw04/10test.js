let students = [
  { name: "小明", score: 80 },
  { name: "小華", score: 60 },
  { name: "小美", score: 90 }
];

function printPassed(students) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 70) {
      console.log(students[i].name);
    }
  }
}

printPassed(students);
