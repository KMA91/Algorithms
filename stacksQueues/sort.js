// Constructors

function node(val){
  this.val = val;
  this.next = null;
}

function Stack(){
  this.first = null;

  this.push = function(node){
    var oldfirst = this.first;
    this.first = node;
    this.first.next = oldfirst;
  }

  this.pop = function(){
    var item_popped = this.first;
    this.first = this.first.next;
    return item_popped;
  }

  this.isEmpty = function(){
    return this.first == null;
  }

  this.peek = function(){
    return this.first;
  }
}

// Initializing Stack and nodes

var n1 = new node(9);
var n2 = new node(5);
var n3 = new node(1);
var myStack = new Stack();

// Populating stack
myStack.first = n1;
myStack.first.next = n2;
myStack.first.next.next = n3;

// EX.1 // Sort the elements inside a stack from low to high with only push and pop opperation. Is it possible to do it only with one additional stack?

function sortStack(stack){
  var s2 = new Stack();
  while(!stack.isEmpty()){
    var temp = stack.pop();
    console.log("temp = " + temp.val);
    while(!s2.isEmpty() && s2.peek().val > temp.val){
      console.log("pushing " + s2.peek().val + " into stack");
      stack.push(s2.pop());
    }
    console.log("pushing temp:" + temp.val + " into s2");
    s2.push(temp);
  }
  while(!s2.isEmpty()){
    console.log("pushing " + s2.peek().val + " into stack");
    stack.push(s2.pop());
  }
  return stack;
}

console.log(sortStack(myStack));
