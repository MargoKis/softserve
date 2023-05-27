1. 
function sumSliceArray(arr, first, second) {
    try {
        if (!Number.isInteger(first) || !Number.isInteger(second)) {
            throw new TypeError("Перше та друге число в параметрах функції повинні бути цілими числами");
        }
        
        if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
            throw new Error("Таких індексів не існує");
        }
        
        return arr[first] + arr[second];
    } catch (error) {
        console.log("Помилка:", error.message);
    }
}

2.
function checkAge() {
    try {
        let name = prompt("Введіть ваше ім'я");
        let age = prompt("Введіть ваше вік");
        let status = prompt("Введіть ваше статус");
        
        if (!name || !age || !status) {
            throw new Error('Всі поля повинні бути заповнені');
        }

        if(isNaN(age)) {
            throw new TypeError('Вік повинен бути вказаний цифрою')
        }

        age = Number(age);

        if(age < 18 || age > 70) {
            throw new RangeError('Твій вік є за допустимою границею норми')
        }

        if(status !== 'admin' && status !== 'moderator' && status !== 'user') {
            throw new EvalError('Такого статусу не існує')
        }

        alert('Доступ до перегляду фільмів дозволено')
    }   catch (error) {
        alert('Помилка', error.name, error.message)
    }
}

checkAge();

3. 
function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new TypeError('Висота та ширина повинні бути числовими значеннями')
    }
    return width * height;
}
try {
    let width = prompt("Введи ширину прямокутника");
    let height = prompt("Введи висоту прямокутника");
  
    width = parseFloat(width);
    height = parseFloat(height);
  
    const area = calcRectangleArea(width, height);
    console.log("Площа прямокутника", area);
  } catch (error) {
    console.log("Error", error.message);
  }

4.
class MonthException {
    constructor(message) {
      this.name = "MonthException";
      this.message = message;
    }
  }
  
  function showMonthName(month) {
    const monthNames = [
        "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
        "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
    ];
  
    if (month < 1 || month > 12) {
      throw new MonthException("Такого місяця не існує");
    }
  
    return monthNames[month - 1];
  }

5. 
function showUser(id) {
    if (id < 0) {
      throw new Error("Від'ємне значення id не допускається");
    }
  
    return { id };
  }
  
  function showUsers(ids) {
    const users = [];
  
    for (let i = 0; i < ids.length; i++) {
      try {
        const user = showUser(ids[i]);
        users.push(user);
      } catch (error) {
        console.log("Помилка", error.message);
      }
    }
  
    return users;
  }

