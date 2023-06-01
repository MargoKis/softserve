1;

class Circle {
  constructor(centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  static getCircumferenceByRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCircle() {
    return new Circle(this.centerX, this.centerY, this.radius);
  }

  static createCircle(centerX, centerY, radius) {
    return new Circle(centerX, centerY, radius);
  }

  isPointInside(x, y) {
    const distance = Math.sqrt(
      (x - this.centerX) ** 2 + (y - this.centerY) ** 2
    );
    return distance <= this.radius;
  }

  toString() {
    return `Circle: Center(${this.centerX},${this.centerY}), Radius(${this.radius})`;
  }
}

// Створення об'єкта кола
const myCircle = new Circle(0, 0, 5);

// Отримання довжини кола для поточного об'єкта
console.log("Довжина кола:", myCircle.getCircumference());

// Виклик статичного методу для отримання довжини кола
const radius = 7;
console.log(
  "Довжина кола (статичний метод):",
  Circle.getCircumferenceByRadius(radius)
);

// Отримання копії поточного об'єкта
const copiedCircle = myCircle.getCircle();
console.log("Копія об'єкта круга:", copiedCircle.toString());

// Створення об'єкта круга за заданими параметрами
const newCircle = Circle.createCircle(2, 2, 3);
console.log("Новий об'єкт круга:", newCircle.toString());

// Перевірка попадання крапки до кола
const x = 1;
const y = 3;
console.log(
  `Крапка (${x},${y}) попадає до кола:`,
  myCircle.isPointInside(x, y)
);

// Перетворення об'єкта на рядок
console.log("Стан об'єкта у вигляді рядка:", myCircle.toString());

2;

function PropsCount(currentObject) {
  if (typeof currentObject === "object" && currentObject !== null) {
    return Object.keys(currentObject).length;
  } else {
    return 0;
  }
}

3;

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(`Full Name: ${this.name} ${this.surname}`);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    console.log(`Full Name: ${this.name} ${middleName} ${this.surname}`);
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year + 1;
    console.log(`Current Course: ${course}`);
  }
}

4;

А;
class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  print(text) {
    let printedText = "";
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (this.inkLevel >= 0.5) {
        printedText += character;
        if (character !== " ") {
          this.inkLevel -= 0.5;
        }
      } else {
        break;
      }
    }
    console.log(`Printed text: ${printedText}`);
  }
}

B;
class RefillableMarker extends Marker {
  refill() {
    this.inkLevel = 100; // Повна заправка маркера
    console.log("Marker refilled.");
  }
}

5;

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2; // приватне поле experience зі значенням 1.2
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`Salary of ${this.fullName} is ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this._experience;
    console.log(
      `Salary of ${this.fullName} considering experience is ${salary}`
    );
  }

  get experience() {
    return this._experience;
  }

  set experience(value) {
    this._experience = value;
  }

  static sortBySalary(workers) {
    workers.sort((a, b) => {
      const salaryA = a.dayRate * a.workingDays * a.experience;
      const salaryB = b.dayRate * b.workingDays * b.experience;
      return salaryA - salaryB;
    });
  }
}
