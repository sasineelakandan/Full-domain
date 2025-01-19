// class Heap{
//     constructor(){
//         this.heap=[]
//     }

//     insert(val){
//         this.heap.push(val)
//         this.bubbleUp(this.heap.length-1)
//     }

//     bubbleUp(idx){
//         let parentIdx=Math.floor((idx-1)/2)
//         if(idx>0&&this.heap[parentIdx]>this.heap[idx]){
//             [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
//             this.bubbleUp(parentIdx)
//         }
//     }

//     remove(){
//         let max=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.bubbleDown(0)
//         return max
//     }

//     bubbleDown(idx){
//      let parentIdx=idx
//      let leftchildIdx=2*idx+1
//      let rightchildIdx=2*idx+2
//      if(leftchildIdx<this.heap.length&&this.heap[parentIdx]>this.heap[leftchildIdx]){
//         parentIdx=leftchildIdx
//      }
//      if(rightchildIdx<this.heap.length&&this.heap[parentIdx]>this.heap[rightchildIdx]){
//         parentIdx=rightchildIdx
//      }

//      if(parentIdx!==idx){
//         [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
//         this.bubbleDown(parentIdx)
//      }
//     }
// }

class Heap{
    constructor(){
        this.heap=[]
    }

    insert(val){
        this.heap.push(val)
        this.boubbleUp(this.heap.length-1)
    }

    boubbleUp(idx){
    let parentidx=Math.floor((idx-1)/2)
    if(idx>0&&this.heap[parentidx]>this.heap[idx]){
        [this.heap[parentidx],this.heap[idx]]=[this.heap[idx],this.heap[parentidx]]
        this.boubbleUp(parentidx)
    }
    }

    remove(){
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.boubbledown(max)
        return max
        

    }

    boubbledown(idx){
       let parentIdx=idx
       let leftchildidx=2*idx+1
       let rightchildIdx=2*idx+2

       if(leftchildidx<this.heap.length&&this.heap[parentIdx]>this.heap[leftchildidx]){
        parentIdx=leftchildidx
       }

       if(rightchildIdx<this.heap.length&&this.heap[parentIdx]>this.heap[rightchildIdx]){
        parentIdx=rightchildIdx
       }

       if(parentIdx!==idx){
         [this.heap[parentIdx],this.heap[idx]]=[this.haep[idx],this.heap[parentIdx]]
         this.boubbledown(parentIdx)
       }
    }
}

const heap=new Heap()

heap.insert(50)

heap.insert(20)

heap.insert(80)

heap.insert(40)

heap.insert(60)

console.log(heap.remove())
console.log(heap.heap)
