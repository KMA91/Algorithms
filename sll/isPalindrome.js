// Constructors

function node(val){
  this.val = val;
  this.next = null;
}

function SLL() {
  this.head = null;
  this.tail = null;
}

// Instatiating SLL and nodes

var list = new SLL();
//  NOT PALINDROME
var n1 = new node(1);
var n2 = new node(2);
var n3 = new node(3);
var n4 = new node(4);

// PALINDROME
var n1 = new node(1);
var n2 = new node(2);
var n3 = new node(2);
var n4 = new node(1);

// Populating list with nodes
list.head = n1;
list.head.next = n2;
list.head.next.next = n3;
list.head.next.next.next = n4;

// Ex.1 // Given a SLL, determine if the values are palindrome. Return 1 or 0 if is palindrome or not, respectively

function palindrome(sll){

  if(!sll.head){
    return 0;
  }

  var current = sll.head;
  var count = 0;

  // Counts number of nodes
  while(current){
    count ++;
    current=current.next;
  }

  // Check to see if there is an even amount of numbers. Odd amount means it not palidrome
  if(count % 2 == 1){
    return 0;
  }

  current = sll.head;
  count = count/2;
  var nodes = [];

  // Pushes first half of values into nodes array list.
  while(count != 0){
    nodes.push(current.val);
    count --;
    current = current.next;
  }

  while(current){
    if(nodes.pop() !== current.val){
      console.log(nodes.pop());
      console.log(current.val);
      return 0;
    }
    current = current.next;
  }

  // Gets here and returns 1(palindrome) if none of the other returns 0
  return 1;
}

console.log(palindrome(list));
