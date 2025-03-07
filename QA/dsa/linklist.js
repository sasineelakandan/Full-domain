// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null
//     }
// }


// class linkedlist{

//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     append(val){
//         let node=new Node(val)
//         if(this.size==0){
//             this.head=node
            
//         }else{
//             this.tail.next=node
//         }
//         this.tail=node
//         this.size++

//     }

//     mid(){
//         let slow=this.head
//         let fast=this.head
//         while(slow!=null&&fast.next!=null){
//           slow=slow.next
//           fast=fast.next.next
//         }
//         console.log(slow.val)
//        }
//        del(val){

//         while(this.head.val==val){
//             this.head=this.head.next
//             this.size--
//         }
//         let curr=this.head

  
//         while(curr.next){
//             if(curr.next.val==val){
//                 curr.next=curr.next.next
//                 this.size--
//             }
            
//             curr=curr.next
//         }
       
       
//        }
//        reverse(){
//           let curr=this.head
//           let prev=null
//           while(curr!=null){
//             let temp=curr.next
//             curr.next=prev
//             prev=curr
//             curr=temp

//           }
//           this.head=prev
//        }
// }


// const list=new linkedlist()

// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.reverse()
// console.log(JSON.stringify(list.head))


let arr=[1,3,5,6,7,9,2,4]

// function bs(arr,t){
// arr.sort((a,b)=>a-b)

// let start=0
// let end=arr.length-1
// while(start<=end){
//  let mid=Math.floor((start+end)/2)
//  if(arr[mid]==t){
//     return mid
//  }
//  if(arr[mid]<t){
//     start=mid+1
//  }else{
//     end=mid-1
//  }

// }
// return start
// }

// console.log(bs(arr,6))
// let strn='sasi'

// let sum=0
// function recursion(str,i=str.length-1){
//     if(0>i){
//         return ''
//     }

//     return str[i]+recursion(str,--i)
   
    

// }

// console.log(recursion(strn))
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }

// console.log(arr)