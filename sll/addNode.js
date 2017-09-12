function node(val){
  this.val = val;
  this.next = null;
}

function SLL() {
  this.head = null;
  this.tail = null;
}

var list = new SLL();
var n1 = new node(1);
var n2 = new node(2);

list.head = n1;
list.head.next = n2;

console.log(list);
console.log(list.head);
console.log(list.head.next);
