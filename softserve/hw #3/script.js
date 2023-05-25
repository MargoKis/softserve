1;

const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(arr) {
  return Array.from(new Set(arr));
}

const exam = compact(arr);
console.log(exam);

2;

function createArray(start, end) {
  let range = [];

  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

let array = createArray(2, 9);
console.log(array);

3;

function plusOne(a, b) {
  for (let i = a; i <= b; i++) {
    let sum = i - a + 1;
    for (let j = 0; j < sum; j++) {
      alert(i);
    }
  }
}

plusOne(2, 5);

4;

function randArray(k) {
  let array = [];

  for (let i = 0; i < k; i++) {
    let random = Math.floor(Math.random() * 500) + 1;
    array.push(random);
  }
  return array;
}

let randarr = randArray(5);
console.log(randarr);

5;

function splitArray(arr) {
  let stringArr = [];
  let numberArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i];

    if (typeof currentElem === "string") {
      stringArr.push(currentElem);
    } else if (typeof currentElem === "number") {
      numberArr.push(currentElem);
    } else if (Array.isArray(currentElem)) {
      let arrays = splitArray(currentElem);
      stringArr = stringArr.concat(arrays.stringArr);
      numberArr = numberArr.concat(arrays.numberArr);
    }
  }

  return {
    stringArr: stringArr,
    numberArr: numberArr,
  };
}

6;

/*/////// перший спосіб ////////*/
let time = new Date();
let currentTime = time.getHours();

if (currentTime >= 23 && currentTime < 5) {
  alert("Доброї ночі");
} else if (currentTime >= 5 && currentTime < 11) {
  alert("Доброго ранку");
} else if (currentTime >= 11 && currentTime < 17) {
  alert("Доброго дня");
} else if (currentTime >= 17 && currentTime < 23) {
  alert("Доброго вечора");
}

/*/////// другий спосіб ////////*/
let date = new Date();
let currentHour = date.getHours();
let saiHi;

switch (true) {
  case currentHour >= 23 || currentHour < 5:
    saiHi = "Доброї ночі";
    break;
  case currentHour >= 5 && currentHour < 11:
    saiHi = "Доброго ранку";
    break;
  case currentHour >= 11 && currentHour < 17:
    saiHi = "Доброго дня";
    break;
  case currentHour >= 17 && currentHour < 23:
    saiHi = "Доброго вечора";
    break;
}
