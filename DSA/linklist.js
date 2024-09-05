class Node{
  constructor(val){
    this.val=val
    this.next=null
    
  }
}



class linkedlist{
  constructor(){
    this.head=null
    this.next=null
    this.size=0
  }

  append(val){
    let node=new Node(val)
    if(this.size>0){
      this.tail.next=node
      this.tail=node
    }else{
      this.head=node
      this.tail=node
    }
    
    this.size++
  }
  deleteVal(val){
    let current = this.head;
            while (current !== null && current.next !== null) {
                if (current.next.val === val) {
                    current.next = current.next.next;
                    this.size--;
                } else {
                    current = current.next;
                }
            }
            if(this.tail!==null&&this.tail.next!==null){
                this.tail=current
            }
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
}



const list=new linkedlist()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.reverse()
console.log(JSON.stringify(list.head))