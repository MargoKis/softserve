10.1;

let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray",
  fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

10.2;

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

10.3;

function mul(...args) {
  let result = 1;

  for (let arg of args) {
    if (typeof arg === "number") {
      result *= arg;
    }
  }

  return result;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

10.4;

let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return () => {
      this.result = callback();
    };
  },
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

10.5;

function mapBuilder(keysArray, valuesArray) {
  let map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }

  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"

10.6;

var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (num) {
    return function () {
      console.log(num);
    };
  })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2
