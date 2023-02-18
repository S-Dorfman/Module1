
import { Node, LinkedList, TextNode, ElementNode } from './data_structures.js'


const node1 = new Node(4);
const node2 = new Node(7);
const node3 = new Node(12);

console.log(node1);
console.log(node2);
console.log(node3);

//new instance of linkedlist class
const myLinkedList = new LinkedList

// walker: 4 -> 7 -> 12 ->null

myLinkedList.head = node1;
myLinkedList.head.next = node2;
myLinkedList.head.next.next = node3;

console.log(myLinkedList); 

//gets head node
console.log(myLinkedList.getHeadNode());
//*traversing
myLinkedList.traverse()

// head: 4 -> 7 -> 12 ->null
let walker = myLinkedList.getHeadNode();
//*removing node with value 7, skip past 7 jump to 12 
// walker.next = walker.next.next;

//*swapping nodes 
//walker  ->next  ->next  ->null
//   4    -> 7    -> 12   ->null

let temp = walker.next.next; //node with 12

walker.next.next = temp.next; //7 -> null

temp.next = walker.next;  //12 -> 7
// console.log(temp);

walker.next = temp;//4 ->12

// walker: 4 -> 12 -> 7 ->null
console.log(walker);

//* Text Node
const textnode = new TextNode("Hello world");
console.log(textnode);

//*Element Node, div element, set name as div
const div = new ElementNode("div");
div.setTextContent("Hello element node");
console.log(div);

//* test 
const p = document.createElement("p");
p.textContent = "Hello World";
console.dir(p);