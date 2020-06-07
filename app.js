const cars = ['oka', 'mazda', 'mers']
const fib = [1, 1, 2, 3, 5, 8, 13]
    /*cars.push('zaz')
    cars.unshift('bmw')
    console.log(cars)
    const firstCar = cars.shift()
    const lastCar = cars.pop()
    console.log(firstCar)
    console.log(lastCar)
    console.log(cars)
console.log(cars.reverse())
console.log(cars)
const text = 'Hello my little friend'
const revers = text.split('').reverse().join('.')
console.log(revers)*/
console.table(cars)
console.log()
    // Simple Binary Tree (depth = 3)
function invertTree(node) {
    if (!node) return null;
    const tree = new TreeNode();


    tree.val = node.val;
    tree.left = invertTree(node.right);
    tree.right = invertTree(node.left);
    return tree;
}
// Inverted Tree
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1*/

// Log the original tree to the console, followed by the inverted tree
console.table(JSON.parse(JSON.stringify(invertTree)), invertTree(node));