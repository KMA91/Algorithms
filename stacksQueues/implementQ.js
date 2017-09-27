// Constructors
function node(val){
  this.val = val;
  this.next = null;
}

function stack(){
  this.head = null;

  // Adds value at end of stack
  this.push = function(node){
    var old = this.head;
    this.head = node;
    if(old != null){
      this.head.next = old;
    }
  }

  // Removes and returns value at end of stack
  this.pop = function(){
    if(!this.head){
      return undefined;
    }
    var old = this.head.val;
    this.head = this.head.next;
    return old;
  }

  // Returns value at end of stack WITHOUT REMOVING ITEM
  this.peek = function(){
    if(!this.head){
      return undefined;
    }
    return this.head.val;
  }
}

// EX 1 // Implement a queue with 2 Stacks

function Q(){
  this.head = null;
  this.stack = new stack();
  this.stack2 = new stack();
  this.tail = null;

  this.enqueue = function(node){
    this.stack2.push(node);
  }

  this.dequeue = function(){
    if(!this.stack2.head && !this.stack.head){
      return undefined;
    }
    if(!this.stack.head){
      this.move();
    }
    return this.stack.pop();
  }

  this.peek = function(){
    if(!this.stack.head && !this.stack2.head){
      return undefined;
    }
    if(!this.stack.head){
      this.move();
    }
    return this.stack.head.val;
  }

  // Pop everything from stack 2 into stack 1
  this.move = function(){
    while(this.stack2.head){
      var num = this.stack2.pop();
      var move_node = new node(num);
      this.stack.push(move_node);
    }
  }

}

var n1 = new node(1);
var n2 = new node(2);
var n3 = new node(3);
var n4 = new node(4);
var n5 = new node(5);

var q = new Q();
q.enqueue(n1);
q.enqueue(n2);
q.dequeue();
q.enqueue(n3);
q.dequeue();
q.dequeue();
console.log(q.peek());
