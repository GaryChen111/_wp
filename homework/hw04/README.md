# JavaScript 綜合練習作業

## 專案說明

本作業將 10 個 JavaScript 基礎練習整合成一個完整範例，內容包含：

- if
- for
- while
- function
- JSON
- array
- object

透過這份程式，可以練習 JavaScript 的基本語法與資料處理方式。

---

## 使用到的語法

### 1. if
用來做條件判斷。

### 2. for
用來重複執行程式，常搭配陣列使用。

### 3. while
當條件成立時，重複執行程式。

### 4. function
用來建立可以重複使用的函式。

### 5. JSON
用來儲存與交換資料格式。

### 6. array
用來儲存多筆資料。

### 7. object
用來表示一個完整的資料，例如一位學生。

---

## 程式功能說明

本程式包含以下功能：

1. 判斷奇偶數（if）
2. 1 到 10 加總（for）
3. while 計數器
4. 計算陣列平均值（array + function）
5. 找最大值（array）
6. 物件資料讀取（object）
7. JSON 轉換
8. 用 for 印出陣列內容
9. 找出大於 10 的數字（if + array）
10. 物件陣列（array + object + function）

---

## 程式碼

```javascript
// JavaScript 綜合練習
// 包含：if、for、while、function、JSON、array、object

console.log("=== JavaScript 綜合程式開始 ===");

// 1.判斷奇偶數（if）
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("偶數");
  } else {
    console.log("奇數");
  }
}

checkEvenOdd(7);

// 2.1 到 10 加總（for）
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("總和:", sum);

// 3.while 計數器
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// 4.計算陣列平均值（array + function）
function getAverage(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

console.log(getAverage([10, 20, 30]));

// 5.找最大值（array）
let numbers = [5, 12, 8, 20, 3];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("最大值:", max);
 
// 6.物件資料讀取（object）
let person = {
  name: "小明",
  age: 18,
  city: "台北"
};

console.log(person.name);
console.log(person.age);

// 7.JSON 轉換
let jsonString = '{"name":"小華","age":20}';

// JSON → 物件
let obj = JSON.parse(jsonString);
console.log(obj.name);

// 物件 → JSON
let newJson = JSON.stringify(obj);
console.log(newJson);

// 8. 用 for 印出陣列內容
let fruits = ["蘋果", "香蕉", "橘子"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 9.找出大於 10 的數字（if + array）
let nums = [3, 15, 8, 20, 7];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 10) {
    console.log(nums[i]);
  }
}
// 10. 物件陣列（array + object + function）
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

// 使用 for + if 判斷 JSON 資料中的學生是否及格
for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
        console.log(students[i].name + " 的成績是 " + students[i].score + "，及格");
    } else {
        console.log(students[i].name + " 的成績是 " + students[i].score + "，不及格");
    }
}

console.log("=== JavaScript 綜合程式結束 ===");
