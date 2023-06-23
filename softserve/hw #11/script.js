11.1;

function getPromise(message, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(message);
    }, delay);
  });
}

getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});

11.2;

function calcArrProduct(arr) {
  return new Promise(function (resolve, reject) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        reject("Error! Incorrect array!");
        return;
      }
      product *= arr[i];
    }
    resolve(product);
  });
}

calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then((result) => console.log(result));
// "Error! Incorrect array!"

11.3;

new Promise(function (resolve, reject) {
  let number = prompt("Enter a number:");
  if (isNaN(number)) {
    reject("Invalid input! Not a number.");
  } else {
    resolve(Number(number));
  }
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
      function askNumber() {
        let number = prompt("Enter a number:");
        if (isNaN(number)) {
          askNumber();
        } else {
          resolve(Number(number));
        }
      }
      askNumber();
    });
  })
  .then(function (result) {
    console.log("Number entered:", result);
  });

11.4;

const delay = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i < 10; i++) {
    const randomTime = Math.random() * 3000;
    const number = await delay(i, randomTime);
    console.log(number);
  }
}

showNumbers();
