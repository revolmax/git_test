// << << << < HEAD
// let car = null;
// alert(typeof car)
// alert(null == undefined)
// var sym = Symbol(1);

// alert(sym);
// var cat = {
//         legs: 4,
//         name: "Мурзик",
//         "color": "Рыжий"
//     }
//     // Читаем значения некоторых свойств из объекта
// alert("Количество лап: " + cat.legs + "\n\t" +
//     "Кличка: " + cat.name + "\n\t" +
//     "Цвет: " + cat.color);
// var cat1 = new Object();
// cat1.legs = 8;
// cat1.name = "Мурзик Cnfhibq";
// cat1.color = "Рыжий rff";
// alert("Количество лап: " + cat1.legs + "\n\t" +
//     "Кличка: " + cat1.name + "\n\t" +
//     "Цвет: " + cat1.color);

// var a = 1,
//     b = 2,
//     c = " белых медведей";
// document.write(1 + 2 + " белых медведей");
// var i = 2;
// i = i++;
// document.write(i);
// i = 2;
// i = i++ + i++;
// document.write(i);
// i = 2;
// i = i++ + ++i;
// document.write(i);
// i = 2;
// i = ++i + ++i;
// document.write(i);
// var a = 5,
//     b = 10,
//     c;
// c = ++a + --b;
// document.write(c);

// let num = prompt('Введите число');
// if (num % 2 == 0) {
//     console.log("Число " + num + " четное")
// } else {
//     console.log("Число " + num + " нечетное")
// }

// let num = prompt('Введите число');
// if (num == 0) {
//     console.log("Число " + num + " Ноль")
// } else if (num > 1 && num < 10) {
//     console.log("Число " + num + " однозначное положительное")
// } else if (num >= 10 && num < 100) {
//     console.log("Число " + num + " двухзначное положительное")
// } else if (num >= 100) {
//     console.log("Число " + num + " трехзначное и более положительное")
// } else if (num > -1 && num < -10) {
//     console.log("Число " + num + " однозначное отрицательное")
// } else if (num >= -10 && num < -100) {
//     console.log("Число " + num + " двухзначное отрицательное")
// } else {
//     console.log("Число " + num + " трехзначное и более отрицательное")
// }
// let x = 4,
//     y = 9,
//     R = 10;
// let L = Math.sqrt(x * x + y * y) < R ? 'yes' : 'no';
// console.log(L)

// let a = prompt('side a');
// let b = prompt('side b');
// let c = prompt('side c');
// if ((a + b) > c && (a + c) > b && (b + c) > a) {
//     console.log('treangle')
// } else {
//     console.log('no treangle')
// }
// let a = prompt('num a');
// let b = prompt('num b');
// let c = prompt('num c');
// if (a > b && a > c) {
//     console.log(a)
// } else if (b > a && b > c) {
//     console.log(b)
// } else if (a == b == c) {
//     console.log('a=b=c')
// } else {
//     console.log(c)
// }

// let a = prompt('num a');
// let a1 = ~~(a / 100);
// let a2 = ~~((a % 100) / 10)
// let a3 = (a % 10)
// console.log(a + ' ' + a1 + ' ' + a2 + ' ' + a3)
// let sum = a1 + a2 + a3;
// let mult = a1 * a2 * a3
// if (a % 2 == 0) {
//     console.log(sum)
// } else {
//     console.log(mult)
// }

// var obj = { fruit: "an Apple", flower: "rose", animal: "dog" };
// console.log(obj.animal);
// console.log(obj['fruit']);

// let person = {};
// person.name = prompt('name');
// person.surname = prompt('surname');
// person.age = prompt('age', 22);
// console.log(person);
// person.name = 'John';
// console.log(person.name);

// let arr = ['Привет, ', 'мир', '!']
// console.log(arr);
// delete arr[1];
// console.log(arr);
// arr[1] = 'JavaScript';
// console.log(arr[0] + arr[1] + arr[2]);

// let num = +prompt('num');
// console.log(typeof num)
// switch (num) {
//     case 1:
//         console.log('spring');
//         break;
//     case 2:
//         console.log('summer');
//         break;
//     case 3:
//         console.log('othem');
//         break;
//     case 4:
//         console.log('winter');
//         break;
//     default:
//         console.log('wrong number')
// }

// let day = +prompt('num', 'from 1 to 31');
// switch (true) {
//     case day >= 1 && day < 10:
//         console.log('first');
//         break;
//     case day >= 10 && day < 20:
//         console.log('second');
//         break;
//     case day >= 20 && day <= 31:
//         console.log('fird');
//         break;
// }

// let month = 9;
// switch (true) {
//     case month == 12 || month <= 2:
//         console.log('Зима');
//         break;
//     case month >= 3 && month <= 5:
//         console.log('Весна');
//         break;
//     case month >= 6 && month <= 8:
//         console.log('Лето');
//         break;
//     case month >= 9 && month <= 11:
//         console.log('Осень');
//         break;
// }

// let num = +prompt('num');
// if (num == 25) {
//     console.log('25')
// } else if (num == 10 || num == 20 || num == 30 || num == 40) {
//     console.log('От 1 до 4-х десятков')
// } else {
//     console.log('Числа нет в базе')
// }

// var i, j, sum = 0;

// for (i = 1, j = 5; i < 5; i++, j--) {
//     sum += i * j;
//     console.log(i);
//     console.log(j);
//     console.log(sum); // 5; 13; 22; 30
// } ===
// ===
// =
// const cars = ['oka','bmw','mers']
// const fib = [1,1,2,3,5,8,13]
// const index = cars.indexOf('bmw')
// cars[index] = 'java'
// console.log(cars);
// >>>
// >>>
// > a429622f279d08826418e9c623c31b8b0c0743a7
// let car = null;
// alert(typeof car)
// alert(null == undefined)
// var sym = Symbol(1);

// alert(sym);
// var cat = {
//         legs: 4,
//         name: "Мурзик",
//         "color": "Рыжий"
//     }
//     // Читаем значения некоторых свойств из объекта
// alert("Количество лап: " + cat.legs + "\n\t" +
//     "Кличка: " + cat.name + "\n\t" +
//     "Цвет: " + cat.color);
// var cat1 = new Object();
// cat1.legs = 8;
// cat1.name = "Мурзик Cnfhibq";
// cat1.color = "Рыжий rff";
// alert("Количество лап: " + cat1.legs + "\n\t" +
//     "Кличка: " + cat1.name + "\n\t" +
//     "Цвет: " + cat1.color);

// var a = 1,
//     b = 2,
//     c = " белых медведей";
// document.write(1 + 2 + " белых медведей");
// var i = 2;
// i = i++;
// document.write(i);
// i = 2;
// i = i++ + i++;
// document.write(i);
// i = 2;
// i = i++ + ++i;
// document.write(i);
// i = 2;
// i = ++i + ++i;
// document.write(i);
// var a = 5,
//     b = 10,
//     c;
// c = ++a + --b;
// document.write(c);

// let num = prompt('Введите число');
// if (num % 2 == 0) {
//     console.log("Число " + num + " четное")
// } else {
//     console.log("Число " + num + " нечетное")
// }

// let num = prompt('Введите число');
// if (num == 0) {
//     console.log("Число " + num + " Ноль")
// } else if (num > 1 && num < 10) {
//     console.log("Число " + num + " однозначное положительное")
// } else if (num >= 10 && num < 100) {
//     console.log("Число " + num + " двухзначное положительное")
// } else if (num >= 100) {
//     console.log("Число " + num + " трехзначное и более положительное")
// } else if (num > -1 && num < -10) {
//     console.log("Число " + num + " однозначное отрицательное")
// } else if (num >= -10 && num < -100) {
//     console.log("Число " + num + " двухзначное отрицательное")
// } else {
//     console.log("Число " + num + " трехзначное и более отрицательное")
// }
// let x = 4,
//     y = 9,
//     R = 10;
// let L = Math.sqrt(x * x + y * y) < R ? 'yes' : 'no';
// console.log(L)

// let a = prompt('side a');
// let b = prompt('side b');
// let c = prompt('side c');
// if ((a + b) > c && (a + c) > b && (b + c) > a) {
//     console.log('treangle')
// } else {
//     console.log('no treangle')
// }
// let a = prompt('num a');
// let b = prompt('num b');
// let c = prompt('num c');
// if (a > b && a > c) {
//     console.log(a)
// } else if (b > a && b > c) {
//     console.log(b)
// } else if (a == b == c) {
//     console.log('a=b=c')
// } else {
//     console.log(c)
// }

// let a = prompt('num a');
// let a1 = ~~(a / 100);
// let a2 = ~~((a % 100) / 10)
// let a3 = (a % 10)
// console.log(a + ' ' + a1 + ' ' + a2 + ' ' + a3)
// let sum = a1 + a2 + a3;
// let mult = a1 * a2 * a3
// if (a % 2 == 0) {
//     console.log(sum)
// } else {
//     console.log(mult)
// }

// var obj = { fruit: "an Apple", flower: "rose", animal: "dog" };
// console.log(obj.animal);
// console.log(obj['fruit']);

// let person = {};
// person.name = prompt('name');
// person.surname = prompt('surname');
// person.age = prompt('age', 22);
// console.log(person);
// person.name = 'John';
// console.log(person.name);

// let arr = ['Привет, ', 'мир', '!']
// console.log(arr);
// delete arr[1];
// console.log(arr);
// arr[1] = 'JavaScript';
// console.log(arr[0] + arr[1] + arr[2]);

// let num = +prompt('num');
// console.log(typeof num)
// switch (num) {
//     case 1:
//         console.log('spring');
//         break;
//     case 2:
//         console.log('summer');
//         break;
//     case 3:
//         console.log('othem');
//         break;
//     case 4:
//         console.log('winter');
//         break;
//     default:
//         console.log('wrong number')
// }

// let day = +prompt('num', 'from 1 to 31');
// switch (true) {
//     case day >= 1 && day < 10:
//         console.log('first');
//         break;
//     case day >= 10 && day < 20:
//         console.log('second');
//         break;
//     case day >= 20 && day <= 31:
//         console.log('fird');
//         break;
// }

// let month = 9;
// switch (true) {
//     case month == 12 || month <= 2:
//         console.log('Зима');
//         break;
//     case month >= 3 && month <= 5:
//         console.log('Весна');
//         break;
//     case month >= 6 && month <= 8:
//         console.log('Лето');
//         break;
//     case month >= 9 && month <= 11:
//         console.log('Осень');
//         break;
// }

// let num = +prompt('num');
// if (num == 25) {
//     console.log('25')
// } else if (num == 10 || num == 20 || num == 30 || num == 40) {
//     console.log('От 1 до 4-х десятков')
// } else {
//     console.log('Числа нет в базе')
// }

// var i, j, sum = 0;

// for (i = 1, j = 5; i < 5; i++, j--) {
//     sum += i * j;
//     console.log(i);
//     console.log(j);
//     console.log(sum); // 5; 13; 22; 30
// } ===
// === =
// const cars = ['oka', 'bmw', 'mers']
// const fib = [1, 1, 2, 3, 5, 8, 13]
// const index = cars.indexOf('bmw')
// cars[index] = 'java'
// console.log(cars);

// var num1 = +prompt('Введите целое число: ', '');

// var num2 = 0,
//     digit;

// while (num1 > 0) {
//     digit = num1 % 10; // находим остаток - последнюю цифру числа
//     num1 = num1 / 10 ^ 0; // делим нацело - убираем из числа последнюю цифру
//     num2 = num2 * 10; // увеличиваем разрядность второго числа
//     num2 = num2 + digit; // добавляем очередную цифру
// }

// console.log('"Обратное" ему число:' + num2);

// var users = {
//     "John": 28,
//     "Mark": 30,
//     "David": 25,
//     "Richard": 42
// };
// var sum = 0;

// for (var name in users) {
//     sum += users[name];
// }

// alert(sum);

// let num = +prompt('enter num');
// let result = 0;
// while (num > 0) {
//     if (num % 10 % 2 == 0) {
//         result += num % 10;
//         num = num / 10 ^ 0;

//     }
// }

// console.log(result);
// let digit = 0,
//     sum = 0;
// //  srSum = sum / digit;
// do {
//     let num = +prompt('enter num', 0);
//     if (num) {
//         digit++;
//         sum += num
//     }
// } while (digit);
// console.log(digit);
// console.log(sum);
// console.log(sum / digit);
// let numStart = +prompt('start num', 0);
// let numFinish = +prompt('finish num', 0);
// let sum = 0;
// let i = numStart;
// while (i <= numFinish) {
//     if (i % 2 !== 0) {
//         sum += i
//         console.log(i)
//     }
//     i++;
// }
// console.log(sum)

// let num = +prompt('enter num *');
// for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num - 1; j++) {
//         document.write(' 1 ');
//     }
//     for (let j = num - 2 * i; j <= num; j++) {
//         document.write('*');
//     }
//     document.write('<br>');
//}
// var height = +prompt("Введите высоту  равнобедренного треугольника: ", "");

// for (var i = 0; i < height; i++) {
//     for (var j = 1; j < height - i; j++) {
//         document.write('  '); // рисуем пробел
//     }
//     for (var j = height - 2 * i; j <= height; j++) {
//         document.write('*'); // рисуем символ
//     }
//     document.write("<br>");
// }
// for (let i = 0; i <= 10; i++) {
//     console.log('this is number' + ' ' + i)
// }
// let drivers = ['oleh', 'serhii'];
// for (let i = 0; i < drivers.length; i++) {
//     console.log(drivers[i])
// }
// class Hater {
//     constructor(firstName, secondName) {
//         this.firstName = firstName;
//         this.secondName = secondName;
//         //console.log('hi, i am a constructor' + n)
//     }
//     sayName() {
//         console.log(`${this.firstName} ${this.secondName}`)
//     }
// }
// let hater1 = new Hater('vasya', 'pupkin');
// hater1.sayName();
// let hater2 = new Hater('ivan', 'petrov');
// hater2.sayName();

// const fac = (n) => {
//     return n ? n * fac(n - 1) : 1
// }
// console.log(fac(3))

// let name = 'oleg';
// const age = '40';
// const person = (name) => {
//     console.log(`helo  ${name}`)
// }
// person(name)

// let array = [];
// const range = (start, end) => {
//     for (let i = start; i <= end; i++) {
//         if (i % 2 !== 0) {
//             array.push(i)
//         }
//     }
//     console.log(array);
// }
// range(15, 30)

// const average = (a, b) => {
//     let sum = (a + b) / 2;
//     console.log(sum)
// }
// average(5, 3)
// const square = (x) => {
//     let sq = x * x;
//     console.log(sq)
// }
// square(3);
// const cube = (x) => {
//     let cb = x * x * x;
//     console.log(cb)
// }
// cube(3);
// const calculate = () => {
//     const array = [];
//     for (let i = 0; i <= 9; i++) {
//         array[i] = average(square(i), cube(i));
//         //  console.log(result)
//         // array.push(result)
//     }
//     return array
// }
// calculate()

// const obj1 = { name: 'vasya' };
// let obj2 = { name: 'petya' }
// obj1.name = 'kolya'
// obj2.name = 'kolpetrya'
// console.log(obj1);
// console.log(obj2)
// obg1 = { name: 50 };
// obj2 = { age: 40 }
// console.log(obj1);
// console.log(obj2);

// const createUser = (name, city) => {
//     let user = { name: name, city: city }
//     console.log(user)
// }
// createUser('marcus', 'rome')

// const phonebook = [
//     { name: 'Marcus', phone: '+380445554433' },
//     { name: 'Vasya', phone: '+38454545454' },
// ];

// const findPhoneByName = (name) => {
//     for (const rec of phonebook) {
//         if (rec.name === name) console.log(rec.phone);
//     }
// };
// const phonebook1 = {
//     Marcus: '+380445554433',
//     phone: '+38454545454'
// };

// const findPhoneByName1 = (name) => {
//     console.log(phonebook1[name]);
// }
// findPhoneByName1('phone')
// findPhoneByName('Marcus')