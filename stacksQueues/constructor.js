// EX 1 // Stacks w/ Linked lists
// Constructors

function node(val){
  this.val = val;
  this.next = null;
}

function LinkedStackOfStrings(){
  this.first = null;

  this.isEmpty = function(){
    return first == null;
  }

  this.push = function(string){
    var oldfirst = this.first;
    first = new node(string);
    first.next = oldfirst;
  }

  this.pop = function(){
    var item_popped = first.val;
    first = first.next;
    return item_popped;
  }

  this.peek = function(){
    return this.first;
  }

}

// EX 2 // Stacks w/ ARRAY OF STRINGS
// Constructors

// function ArrayStack(){
//   this.array = [];
//   this.size = 0;
//
//   this.isEmpty = function(){
//     return this.size == 0;
//   }
//
//   this.push = function(item){
//     this.array[this.size++] = item;
//   }
//
//   this.pop = function(){
//     var item = this.array[--this.size];
//     this.array[this.size] = null;
//     return item;
//   }
//
//   this.peek = function(){
//     return this.array[--this.size];
//   }
// }
//
// // Initialize ArrayStack and implement methods
// var newone = new ArrayStack();
// console.log(newone.isEmpty());
// newone.push(5);
// console.log(newone.peek());
// newone.pop();

// // EX 3 // Stacks w/ KEY VALUE PAIRS
// // Constructors
// function stack(){
//   this.count = 0;
//   this.storage = {};
//
//   // Adds value at end of stack
//   this.push = function(val){
//     this.storage[this.count] = val;
//     this.count++;
//   }
//
//   // Removes and returns value at end of stack
//   this.pop = function(){
//     if(this.count === 0){
//       return undefined;
//     }
//
//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   }
//
//   this.size = function(){
//     return this.count;
//   }
//
//   // Returns value at end of stack WITHOUT REMOVING ITEM
//   this.peek = function(){
//     return this.storage[this.count-1];
//   }
// }
//
// var mystack = new stack()
// mystack.push(3);
// mystack.push(5);
// console.log(mystack.peek());
// console.log(mystack.pop());
