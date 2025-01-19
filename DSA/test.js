


// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null



//     }
// }


// class Linklist{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     append(val){
//       let node=new Node(val)
//     if(this.size>0){
//         this.tail.next=node
//         this.tail=node
//     }else{
//         this.head=node
//         this.tail=node
//     }
//     this.size++

//     }

//     midlle(){
//         let slow=this.head
//         let fast=this.head
//         let index=0
//         while(slow!==null&&fast.next!==null){
//            index=slow
//             slow=slow.next
//             fast=fast.next.next

//         }

//       if(index!==null){
//         index.next=slow.next
//       }
        
//     }
//     reverse(){
//         let curr=this.head
//         let prev=null
//         while(curr!==null){
//             let temp=curr.next
//             curr.next=prev
//             prev=curr
//             curr=temp
//         }

//         this.head=prev
//     }
// }

// const list=new Linklist()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)

// list.reverse()
// console.log(JSON.stringify(list.head))



// class Node{
//     constructor(val){
//         this.val=val
//         this.left=null
//         this.right=null
//     }
// }


// class bst{
//     constructor(){
//         this.root=null
//     }

//     insert(val){
//         let node=new Node(val)

//         if(this.root==null){
//             this.root=node
//             return this
//         }else{
//             let curr=this.root
//             while(true){
//                 if(curr.val>val){
//                     if(curr.left==null){
//                         curr.left=node
//                         return this
//                     }else{
//                         curr=curr.left
//                     }
//                 }else{
//                     if(curr.right==null){
//                         curr.right=node
//                         return this
//                     }else{
//                         curr=curr.right
//                     }
//                 }
//             }
//         }

//     }

//     dfs(){
//         let curr=this.root
//         let data=[]
       
//         function travisal(node){
//             data.push(node.val)
//             if(node.left){
                
//                 travisal(node.left)
//             }

//             if(node.right){
//                 travisal(node.right)
//             }

            
//         }
//         travisal(curr)
        
       
//     }

//     getMin(curr = this.root){
//         if(curr.left){
//             return this.getMin(curr.left)
//         }else{
//             return curr.val
//         }
//     }
// }

// const binary=new bst()

// binary.insert(60)
// binary.insert(70)
// binary.insert(30)
// binary.insert(40)
// binary.insert(50)
// console.log(binary.dfs())
// console.log(binary.getMin())
// console.log(JSON.stringify(binary.root))



// class graph{
//     constructor(){
//         this.adjacencylist={}
//     }

//     addVertex(vertex){
//         if(!this.adjacencylist[vertex]){
//             this.adjacencylist[vertex]=new Set()
//         }
//     }
//     addEdges(v1,v2){
//         this.addVertex(v1)
//         this.addVertex(v2)

//         this.adjacencylist[v1].add(v2)
//         this.adjacencylist[v2].add(v1)

//     }

//     removeEdges(v1,v2){
//         this.adjacencylist[v1].delete(v2)
//         this.adjacencylist[v2].delete(v1)
//     }

//     removeVetex(vertex){
//         for(let negibour of this.adjacencylist[vertex]){
//             this.removeEdges(negibour,vertex)
//         }

//         delete this.adjacencylist[vertex]

//     }

//     bfs(vertex){
//         let visited={}
//         let data=[]
//         let queue=[vertex]
//         while(queue.length){
//          visited[vertex]=true
//          data.push(queue.shift())

//         }
//     }
// }

// const Graph=new graph()

// Graph.addEdges('A','B')
// Graph.addEdges('B','C')
// Graph.addEdges('A','C')

// console.log(Graph.adjacencylist)


// function binarySerch(arr,t,left=0,right=arr.length-1){
//     arr.sort((a,b)=>a-b)
 
//  let mid=Math.floor((left+right)/2)  
//   if(left>right){
//     return -1
//   }
  
   
//    if(arr[mid]==t){
//     return mid
//    }
//    if(arr[mid]>t){
//      return binarySerch(arr,t,left,--right)
//    }else{
//     return binarySerch(arr,t,++left,right)
//    }
  
//   }



// console.log(binarySerch([3,4,1,9,7,8],1))


// class Node{
//     constructor(){
//         this.childrens={}
//         this.isEnd=false
//     }
// }


// class trai{
//     constructor(){
//         this.root=new Node()
//     }

//     insert(word){
//         let curr=this.root
//      for(let i=0;i<word.length;i++){
//         if(!curr.childrens[word[i]]){
//             curr.childrens[word[i]]=new Node()
//         }
//         curr=curr.childrens[word[i]]
//      }

//      curr.isEnd=true
//     }

//     prffix(word){
//         let curr=this.root
//      for(let i=0;i<word.length;i++){
//         if(!curr.childrens[word[i]]){
//             return false
//         }
//         curr=curr.childrens[word[i]]
//      }

//      return curr
//     }
// }


// const Trai=new trai()

// Trai.insert('sasi')

// console.log(JSON.stringify(Trai.root))


// let date=new Date()

// console.log(`${1+date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)


class Heap{
    constructor(){
        this.heap=[]
    }
    insert(val){
       this.heap.push(val)
       this.bobbleup(this.heap.length-1)
    }

    bobbleup(idx){
     let parentidx=Math.floor((idx-1)/2)
     if(idx>0&&this.heap[parentidx]>this.heap[idx]){
        [this.heap[parentidx],this.heap[idx]]=[this.heap[idx],this.heap[parentidx]]
        this.bobbleup(parentidx)
     }
    }

    remove(){
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.bobbleupDown(0)
        return min
    }
    bobbleupDown(idx){
     let parentidx=idx
     let leftchildidx=2*idx+1
     let rightchildIdx=2*idx+2
     if(leftchildidx<this.heap.length&&this.heap[parentidx]>this.heap[leftchildidx]){
        parentidx=leftchildidx
     }
     if(rightchildIdx<this.heap.length&&this.heap[parentidx]>this.heap[rightchildIdx]){
        parentidx=rightchildIdx
     }

     if(parentidx!==idx){
        [this.heap[parentidx],this.heap[idx]]=[this.heap[idx],this.heap[parentidx]]
        this.bobbleupDown(parentidx)
     }

    }
}

const heap=new Heap()

heap.insert(50)
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(10)
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.heap)
