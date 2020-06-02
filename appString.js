//const name = 'Oleg'
//const age = 40
//function getAge(){
//    return age
//}
//const out = 'Hi, my name is  ' + name + ' i am is ' + age + '  old'
//const out = `Hi, my name is ${name} and i am ${age <=40 ? 'old':'yang'} years old`
//console.log(out)
//const name = 'Oleg'
function person(s, name, age){
 if (age < 0){
     age = 'Not birth'
 }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Oleg'
const personAge = '40'
const out = person `Name: ${personName}, age ${personAge}!`
console.log(out)