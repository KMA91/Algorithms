function node(val){
  this.val = val;
  this.next = null;
}

var n1 = new node(1);
var n2 = new node(2);
var n3 = new node(3);
var n4 = new node(4);


// EX 1 // Given a stack of nodes with num values, return the lowest value
// EX 2 // Given a stack of nodes with num values, return the highest value
// EX 3 // Given a stack of nodes with num values, return the average value

function LinkedStacksOfNums(){
  this.first = null;

  this.push = function(node){
    var oldfirst = this.first;
    this.first = node;
    this.first.next = oldfirst;
  }

  // EX 1 // Given a stack of nodes with num values, return the lowest value
  this.findMin = function(){
    var current = this.first;
    // If current(this.first) does not exist, return undefined
    if(!current){
      return undefined;
    }

    // Traverse through self, and return the minimum value
    var min = current.val;
    while(current){
      if(current.val < min){
        min = current.val;
      }
      current = current.next;
    }
    return min;
  }

  // EX 2 // Given a stack of nodes with num values, return the highest value
  this.findMax = function(){
    var current = this.first;

    // If current(this.first) does not exist, return undefined
    if(!current){
      return undefined;
    }

    // Traverse through self, and return the maximum value
    var max = current.val;
    while(current){
      if(current.val > max){
        min = current.val;
      }
      current = current.next;
    }
    return max;
  }

  // EX 3 // Given a stack of nodes with num values, return the average value
  this.findAvg = function(){
    var current = this.first;
    var count = 0;
    // If current(this.first) does not exist, return undefined
    if(!current){
      return undefined;
    }

    // Traverse through self, add to count for each node, return average(sum/count)
    var sum = 0;
    while(current){
      sum += current.val;
      current = current.next;
      count++;
    }
    return sum/count;
  }
}

var StackOfNums = new LinkedStacksOfNums();
StackOfNums.push(n1);
StackOfNums.push(n2);
StackOfNums.push(n3);
console.log(StackOfNums.findMin());
console.log(StackOfNums.findMax());
console.log(StackOfNums.findAvg());
