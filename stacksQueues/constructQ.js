function node(val){
  this.val = val;
  this.next = null;
}

function Q(){
  this.head = null;
  this.tail = null;
}

function enqueue(q, node){
  while(!q.head){
    q.head = node;
    q.tail = node;
    return q;
  }
  var current = q.head;
  while(current){
    if(q.head == q.tail){
      var 
    }
  }
}

var newQ = new Q();
var n1 = node(1);
var n2 = node(2);
var n3 = node(3);
var n4 = node(4);
