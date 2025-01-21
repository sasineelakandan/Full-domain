class Node{
  constructor(val){
      this.val=val
      this.next=null
  }
}

class linkedlist{
  constructor(){
      this.head=null;
      this.tail=null;
      this.size=0;
  }

 append(val){
  let node=new Node(val)
  if(this.size==0){
      this.head=node
  }else{
      this.tail.next=node
  }
  this.tail=node
  this.size++
 }
 prepend(val){
  let node=new Node(val)
  if(this.size==0){
      this.tail=node
  }else{
      node.next=this.head
  }
  this.head=node
  this.size++
 }
 reverse(){
  let curr=this.head
  let prev=null
  while(curr!=null){
      let temp=curr.next
      curr.next=prev
      prev=curr
      curr=temp
  }
  this.head=prev
 }
 mid(){
  let slow=this.head
  let fast=this.head
  while(slow!=null&&fast.next!=null){
    slow=slow.next
    fast=fast.next.next
  }
  console.log(slow.val)
 }
 delete(val){
  let curr=this.head
  while(curr.next){
      if(curr.next.val==val){
          curr.next=curr.next.next
      }
      
      curr=curr.next
  }
  this.size--
 }
}

const list=new linkedlist()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.delete(30)
console.log(JSON.stringify(list.head))