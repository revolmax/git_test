<<<<<<< HEAD
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

var i, j, sum = 0;

for (i = 1, j = 5; i < 5; i++, j--) {
    sum += i * j;
    console.log(i);
    console.log(j);
    console.log(sum); // 5; 13; 22; 30
}
=======
const cars = ['oka','bmw','mers']
const fib = [1,1,2,3,5,8,13]
const index = cars.indexOf('bmw')
cars[index] = 'java'
console.log(cars);
>>>>>>> a429622f279d08826418e9c623c31b8b0c0743a7
