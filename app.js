const num = 40
const float = 40.40
const pow = 10e5
console.log(Number.MAX_SAFE_INTEGER + 10)
console.log(Math.pow(2,53)-1)
console.log((0.2+0.4).toFixed(1))

function getRand (min,max){
    return Math.floor(Math.random() * (max-min) + min)
}
console.log(getRand(5,40))