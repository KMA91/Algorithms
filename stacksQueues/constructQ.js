function node(val){
  this.val = val;
  this.next = null;
}

function Q(){
  this.head = null;
  this.tail = null;
}

function enqueue(q, node){
  if(!Q.head){
    q.head = node;
    q.tail = node;
    return q;
  }
  var old = q.head;
  q.head = node;
  q.head.next = old;
  return q;
}

function dequeue(q){
  if(!q.head){
    return undefined;
  }
  var old = q;
  q.head = q.head.next;
  if(q.head == null){
    q.tail = null;
  }
  return old.val;
}

var newQ = new Q();
var n1 = node(1);
var n2 = node(2);
var n3 = node(3);
var n4 = node(4);
