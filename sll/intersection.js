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
var list2 = new SLL();
var n1 = new node(1);
var n2 = new node(2);
var n3 = new node(3);
var n4 = new node(4);
var n5 = new node(5);
var n6 = new node(6);
var n7 = new node(7);
var n8 = new node(8);
var n9 = new node(9);
var n10 = new node(10);
var n11 = new node(11);
var n12 = new node(12);

// Creating intersection
n3.next = n4;
n4.next = n5;
n5.next = n6;
// Populating list with nodes
list.head = n1;
list.head.next = n2;
list.head.next.next = n3;
// Populating second list with nodes
list2.head = n9;
list2.head.next = n8;
list2.head.next.next = n7;
list2.head.next.next.next = list.head.next.next;

// Ex.1 // Given a two SLLs, check to see if the lists intersect

function intersection(sll, sll2){
  if(!sll.head || !sll2.head){
    return false;
  }

  var length1 = 0;
  var length2 = 0;
  var curr1 = sll.head;
  var curr2 = sll2.head;

  // Used to get length of sll #1
  while(curr1){
    length1++;
    curr1 = curr1.next;
  }

  // Used to get length of sll #2
  while(curr2){
    length2++;
    curr2 = curr2.next;
  }

  // Restart both pointers to the heads
  curr1 = sll.head;
  curr2 = sll2.head;

  // Place both pointers at node before the intersecting node
  if(length1 > length2){
    var count = length1 - length2;
    while(count != 0){
      curr1 = curr1.next;
      count--;
    }
  }else if(length2 > length1){
    var count = length2 - length1;
    while(count != 0){
      curr2 = curr2.next;
      count--;
    }
  }
  // Check nodes on both pointers to see if there is an exact match
  while(curr1 && curr2){
    if(curr1.next == curr2.next){
      return true;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  // Did not find any of the above validations to be false, there is an intersection!
  return false;
}

console.log(intersection(list, list2));
