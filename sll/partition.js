// Constructors

function node(val){
  this.val = val;
  this.next = null;
}

function SLL() {
  this.head = null;
  // this.tail = null;
}

// Initializing SLL and nodes

var list = new SLL();
var n1 = new node(2);
var n2 = new node(1);
var n3 = new node(7);
var n4 = new node(6);

// Populating list with nodes

list.head = n1;
list.head.next = n2;
list.head.next.next = n3;
list.head.next.next.next = n4;

// Given an SLL and a value(partition), move all values lower than the partition to the left of the list and all the values higher than the partition to the right of the list

function partition(sll, partition){

  if(!sll.head){
    return undefined;
  }

  var lower = new SLL();
  var higher = new SLL();
  var current = sll.head;

  // Traverse sll
  while(current){

    // if the current node's value is lower than the partition value, place that value in the lower sll
    if(current.val < partition){
      if(!lower.head){
        lower.head = new node(current.val);
        var lower_pointer = lower.head;
      }else{
        lower_pointer.next = new node(current.val);
        lower_pointer = lower_pointer.next;
      }
    }

    // if the current node's value is higher than the partition value, place that value in the higher sll
    else if(current.val > partition){
      if(!higher.head){
        higher.head = new node(current.val);
        var higher_pointer = higher.head;
      }else{
        higher_pointer.next = new node(current.val);
        higher_pointer = higher_pointer.next;
      }
    }

    // if the current node's value is the same as the partition add as a head in the higher sll and connect it to the old list
    else if(current.val == partition){
      if(!higher.head){
        higher.head = new node(current.val);
        var higher_pointer = higher.head;
      }else{
        var old = higher.head;
        higher.head = new node(current.val);
        higher.head.next = old;
        higher_pointer = higher_pointer.next;
      }
    }
    current = current.next;
  }
  lower_pointer.next = higher.head;
  return lower.head;
}

console.log(partition(list, 2));
