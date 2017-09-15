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

// Populating list with nodes
list.head = n1;
list.head.next = n2;
list.head.next.next = n3;
list.head.next.next.next = n4;
list.head.next.next.next.next = n5;
list.head.next.next.next.next.next = n6;

// Populating second list with nodes
list2.head = n1;
list2.head.next = n2;
list2.head.next.next = n3;
list2.head.next.next.next = n4;
list2.head.next.next.next.next = n5;
list2.head.next.next.next.next.next = n6;

// Ex.1 // Given a two, sorted SLLs, merge both lists into one.

function mergeTwo(sll, sll2){
// If there is content in one list but not the other, return the list with content
  if(!sll.head){
    if(sll2.head){
      return sll;
    }
  }else if(!sll2.head){
    if(sll.head){
      return sll2;
    }
  }
  var sllnew = new SLL();
  var current1 = sll.head;
  var current2 = sll2.head;

  // Instatiate a head if one hasn't been instatiated yet
  if(!sllnew.head){
    if(current1.val > current2.val){
      sllnew.head = new node(current2.val);
      var sllnewcurrent = sllnew.head;
      current2 = current2.next;
    }else{
      sllnew.head = new node(current1.val);
      current1 = current1.next;
      var sllnewcurrent = sllnew.head;
    }
  }

  // Check value of both lists, lowest value will be added to the new list
  while(current1 && current2){
    if(current1.val > current2.val){
      sllnewcurrent.next = new node(current2.val);
      sllnewcurrent = sllnewcurrent.next;
      current2 = current2.next;
    }else{
      sllnewcurrent.next = new node(current1.val);
      sllnewcurrent = sllnewcurrent.next;
      current1 = current1.next;
    }
  }

  // The next two block codes will add the remainder values into the new list assuming there aren't values in the counterlist
  while(!current1 && current2){
    sllnewcurrent.next = current2;
    current2 = current2.next;
    sllnewcurrent = sllnewcurrent.next;
  }

  while(!current2 && current1){
    sllnewcurrent.next = current1;
    current1 = current1.next;
    sllnewcurrent = sllnewcurrent.next;
  }

  // CHECKER // If this code is running correctly, it'll print out the values of the nodes
  var current3 = sllnew.head;
  while(current3){
    console.log(current3.val);
    console.log("----------------------------");
    current3 = current3.next;
  }

  return sllnew;
}

console.log(mergeTwo(list, list2));
