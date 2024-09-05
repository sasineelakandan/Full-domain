class Heap{
    constructor(){
        this.heap=[]
    }

    insert(val){
        this.heap.push(val)
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(idx){
        let parentIdx=Math.floor((idx-1)/2)
        if(idx>0&&this.heap[parentIdx]<this.heap[idx]){
            [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
            this.bubbleUp(parentIdx)
        }
    }

    remove(){
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.bubbleDown(0)
        return max
    }

    bubbleDown(idx){
     let parentIdx=idx
     let leftchildIdx=2*idx+1
     let rightchildIdx=2*idx+2
     if(leftchildIdx<this.heap.length&&this.heap[parentIdx]<this.heap[leftchildIdx]){
        parentIdx=leftchildIdx
     }
     if(rightchildIdx<this.heap.length&&this.heap[parentIdx]<this.heap[rightchildIdx]){
        parentIdx=rightchildIdx
     }

     if(parentIdx!==idx){
        [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
        this.bubbleDown(parentIdx)
     }
    }
}

const heap=new Heap()

heap.insert(50)

heap.insert(20)

heap.insert(80)

heap.insert(40)

heap.insert(60)
let a=heap.heap.length
console.log(a)
let arr=[]
for(let i=0;i<a;i++){

   arr.unshift(heap.remove()) 
}

console.log(arr)
