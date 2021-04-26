<< << << < HEAD
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
console.table(JSON.parse(JSON.stringify(invertTree)), invertTree(node)); ===
=== =
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function(node) {
    if (node.val == null) {
        node = null
    }
    node.val = node.next.val
    node.next = node.next.next
}


window.onload = () => {
        let input = document.querySelector('#input')
        input.oninput = function() {
            let value = this.value.trim()
            let list = document.querySelectorAll('.ul li')
            if (value != '') {
                list.forEach(elem => {
                    if (elem.innerText.search(value) == -1) {
                        elem.classList.add('hide')
                    } else { elem.classList.remove('hide') }
                })
            } else {
                list.forEach(elem => {
                    elem.classList.remove('hide')
                })
            }
            console.log(this.value)

        }
    } >>>
    >>> > a8830ec437bb4b991b126267177ccbd07f9e22de