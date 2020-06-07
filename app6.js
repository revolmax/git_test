/*function greet(name) {
    console.log('Hello - ', name)
}
const greet2 = function greet2(name) {
        console.log('Hello 2 - ', name)
    }
   greet('Oleh')
    greet2('vasya')
    console.dir(greet)
let count = 0
const interval = setInterval(function() {
    if (count === 6) {
        clearInterval(interval)
    } else {
        console.log(++count)
    }
}, 1000)*/
const arrow = (name, age) => {
    console.log('Hello - ', name, age)
}
arrow('Oleh', 40)
const arrow2 = name => console.log('Hello', name)
arrow2('Vasya')
const pow2 = num => num ** 2
console.log(pow2(4))
const sum = (a, b = 1) => a + b
console.log(sum(39))

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}
const res = sumAll(1, 2, 3, 5, 4, 1, 24)
console.log(res)

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}
const member = createMember('Oleh ')
console.log(member('Draghunov'))