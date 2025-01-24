


// function increment(){
//     let count=0
//    return function inside(){
//         return count+=1
//     }
    
    
// }
// const count=increment()
// console.log(count())
// console.log(count())


// function pure(){
//     let x=10
//     console.log(x)
// }

// pure()
// let total=5
// function impure(){
//     let x=10
//     x+=total
//     console.log(x)
// }

// impure()

// function greet(name,callback){
//     console.log(name)
//     callback()
// }

// function sayBye(){
//     console.log('good bye')
// }

// greet('sasi',sayBye)


// const a=[1,2,3,4,6,7,8]

// let b= a.map((val)=>val*2)
// console.log(b)

// let b=a.filter((val)=>val%2==0)

// console.log(b)

// let b=a.reduce((a,b)=>a+b,0)

// console.log(b)
// let val=3
// function*fn(){
//  for(let i=1;i<=20;i++){
//     if(i%2==0){
//         yield i
//     }
    
//  }
// }

// let b=fn()
// for(let i=1;i<=10;i++){
//     console.log(b.next().value)
// }
// function*fn(){
//    yield a[Math.floor(Math.random()*a.length)]
// }


// let b=fn()
// console.log(b.next().value)


// function* genTwoHundered() {
//     for (let i = 100; i >= 0; i -= 2) {
//       yield i;
//     }
//   }
//   const twoHundered = genTwoHundered();
//   const start = performance.now();
//   for (let i of twoHundered) {
//     console.log();
//     if (performance.now() - start > 30) break;
//   }

// function fact(name,age){
//     return{
//         name,
//         age,
//         greet:()=>{
//             console.log(`${name} is age ${age}`)
//         }
//     }
// }


// const obj= fact('sasi',25)
// const obj1= fact('jithin',25)

// obj.greet()
// obj1.greet()

// function constructorfn(name,age){
//     this.name=name
//     this.age=age
//     this.greet=()=>{
//         console.log(this.name+' '+this.age)
//     }
// }

// let b=new constructorfn('sasi',25)
// b.greet()


// let b=(function(){
//     return 10+30+50
// })()

// console.log(b)


// const promise=new Promise((res,rej)=>{

//     let data=false
//     if(data){
//         res('data is comming')
//     }else{
//         rej('data not come')
//     }
// })

// async function data(promise){
//     try{
//     let data=  await promise 
//     console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }

// data(promise)




// const obj = {
//     name: 'akil',
// }


// const handler = {
//     get: function(target,property){
//       if(target[property]){
//         return target[property]
//       }else{
//         return 'novalue'
//       }
//     }
// }

// let p = new Proxy(obj, handler)

// console.log(p.age)
// let promise = Promise.reject(500);
// let promise1 = Promise.resolve(3);
// let promise2 = Promise.reject(500);
// let promise3 = Promise.resolve(5);

// Promise.any([promise,promise1, promise2, promise3])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error('Promise rejected with error:', error);
//     });


// Create a memoization object to store previously computed factorials
// const memo = {};

// // // Define the factorial function with memoization
// function factorial(n) {
//     // Check if the value is already computed
//     if (n in memo) {
//         return memo[n];
//     }
    
//     // Base case: factorial of 0 or 1 is 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }
    
//     // Recursive case: compute factorial and store it in memo
//     memo[n] = n * factorial(n - 1);
    
//     return memo[n];
// }

// console.log(factorial(5))
// console.log(memo)
// ; // Output: 120
// // console.log(factorial(6)); // Output: 720
// console.log(factorial(6))
// console.log(memo); // Output: 120 (this will use the cached value)
// // console.log(factorial(7)); // Output: 5040


// function multi(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }

// let val=multi(10)
// let va2=val(20)
// let val3=va2(30)
// console.log(val3)

// let arr=[{tag:[1,2]},{tag:[2,3]}]

// let b=arr.flatMap((val)=>val.tag)
// console.log(b)

// let obj = [{a:[1,2,3,4,5]},{b:[6,7,8,9,10]},{c:[11,12,13,14,15]}]

// let obj = {
//     a:1,
//     b:{c:2},
//     d:{e:[1,2,3,4,5]}
// }
// let sum=0
// for(let i in obj){
//     if(typeof obj[i]==='object'){
        
//         for(let j in obj[i] ){
//             if(Array.isArray(obj[i][j])){
//                sum+= obj[i][j].reduce((a,b)=>a+b)
//             }else{
//                 sum+=obj[i][j]
//             }
//         }
//     }else if(typeof obj[i]==='number'){
//         sum+=obj[i]
//     }
// }
// console.log(sum)


// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// let max=0
// let maxkey=''
// for(let i in obj){
//     console.log(obj[i])
//     if(obj[i]>max){
//         max=obj[i]
//         maxkey=i
        
//     }
    
// }
// console.log(maxkey)




// function greet(greeting){
//     console.log(this.name+' '+this.age+' '+greeting)
// }
// let a={name:'sasi',age:24}


// greet.call(a,'hello')


// function bSearch(arr,t){

//     arr.sort()

//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//       let mid=Math.floor((left+right)/2)
//       if(arr[mid]==t){
//          return mid
//       }
//       if(arr[mid]<t){
//         left=mid+1
//       }else{
//         right=mid-1
//       }
//     }

//     return -1
// }

// let array=[1,2,4,6,8,9,7]

// console.log(bSearch(array,7))


// function RecursivebSearch(arr,t,left,right){
//     arr.sort()

//     if(left>right){
//         return -1
//     }

//     let mid=Math.floor((left+right)/2)

//     if(arr[mid]==t){
//         return mid
//     }

//     if(arr[mid]>t){
//         return RecursivebSearch(arr,t,left,--right)
//     }else{
//         return RecursivebSearch(arr,t,++left,right)
//     }

// }

// let array=[1,2,4,6,8,9,7]

// console.log(RecursivebSearch(array,7,0,array.length-1))


// function Recursive(str,index=str.length-1){
//     if(index<0){
//         return ''
//     }

//      return str[index]+=Recursive(str,--index)
// }

// let str='sasi'
// console.log(Recursive(str))



// function Recursive(arr,start,end){
//     if(start>=end){
//         return arr
//     }

//      [arr[start],arr[end]]=[arr[end],arr[start]]
//      return Recursive(arr,++start,--end)
// }

// let arr=[1,2,4,6,8,9,7]
// console.log(Recursive(arr,0,arr.length-1))

// function Recursive(n){
//     if(n==0){
//       return n
//     }
//     if(n==1){
//         return n
//     }

//     return n* Recursive (n-1)
// }

// console.log(Recursive(5))


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
//      let node= new Node(val)
//        if(this.size>0){
//         this.tail.next=node
//        }else{
//         this.head=node
//        }

//         this.tail=node
//         this.size++
//     }

//     prepend(val){
//       let node= new Node(val)
//       if(this.size>0){
//         node.next=this.head
//       }else{
//         this.head=node
//       }
//       this.head=node
//       this.size++
//     }

//     reverse(){
//         let curr=this.head
//         let prev=null
//         while(curr!=null){
//         let temp=curr.next
//             curr.next=prev
//             prev=curr
//             curr=temp
//         }
//         this.head=prev
//     }

//     mid(){
//         let slow=this.head
//         let fast=this.head
//         while(slow!=null&&fast.next!=null){
//             slow=slow.next
//             fast=fast.next.next
//         }

//         console.log(slow.val)
        
        
//     }

//     delete(val){

//         if(this.head && this.head.val==val){
//             this.head=this.head.next
//             this.size--
//         }
//       let curr=this.head

//       while(curr!=null&&curr.next!=null){
//          if(curr.next.val===val){
//             curr.next=curr.next.next
//             this.size--
//          }else{
//             curr=curr.next
//          }

//       }
//     }
// }

// const list=new linkedlist()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.prepend(50)
// list.delete(50)
// console.log(JSON.stringify(list.head))

// class Heap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(val) {
//         this.heap.push(val);
//         this.bubbleup(this.heap.length - 1);
//     }

//     bubbleup(idx) {
//         let parentIdx = Math.floor((idx - 1) / 2);
//         if (idx > 0 && this.heap[parentIdx] < this.heap[idx]) {
//             // Swap if parent is smaller than the current node
//             [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
//             this.bubbleup(parentIdx); // Recursively bubble up
//         }
//     }

//     remove() {
        
//         let max = this.heap[0]; // Store the root value
//         this.heap[0] = this.heap.pop(); // Replace root with the last element
//         this.bubbledown(0); // Restore heap property
//         return max;
//     }

//     bubbledown(idx) {
//         let parentIdx = idx;
//         let leftchildIdx = 2 * idx + 1;
//         let rightchildIdx = 2 * idx + 2;

//         // Check if left child exists and is greater than the parent
//         if (leftchildIdx <this.heap.length && this.heap[parentIdx] < this.heap[leftchildIdx]) {
//             parentIdx = leftchildIdx;
//         }

//         // Check if right child exists and is greater than the current largest
//         if (rightchildIdx < this.heap.length && this.heap[parentIdx] < this.heap[rightchildIdx]) {
//             parentIdx = rightchildIdx;
//         }

//         // If parent is not the largest, swap and continue bubbling down
//         if (parentIdx !== idx) {
//             [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
//             this.bubbledown(parentIdx);
//         }
//     }
// }

// // Example Usage:
// const heap = new Heap();
// heap.insert(10);
// heap.insert(20);
// heap.insert(30);
// heap.insert(5);
// heap.insert(40);
// console.log(heap.remove())
// console.log(heap.remove())
// let length = heap.heap.length;
// let arr = [];
// for (let i = 0; i < length; i++) {
//     arr.push(heap.remove());
// }
// console.log(heap.heap); // Should print: [50, 40, 30, 20, 10]


// class Heap{
//     constructor(){
//         this.heap=[]
//     }

//     insert(val){
//       this.heap.push(val)
//       this.bubbleup(this.heap.length-1)
//     }

//     bubbleup(idx){
//         let parentIdx=Math.floor((idx-1)/2)
//         if(idx>0&&this.heap[parentIdx]<this.heap[idx]){
//             [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
//             this.bubbleup(parentIdx)
//         }
//     }

//     remove(){
//         let max=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.bubbledown(0)
//         return max
//     }

//     bubbledown(idx){
//         let parentIdx=idx
//         let leftchildIdx=2*idx+1
//         let rightchildIdx=2*idx+2

//         if(leftchildIdx<this.heap.length&&this.heap[parentIdx]<this.heap[idx]){
//             parentIdx=leftchildIdx
//         }
//         if(rightchildIdx<this.heap.length&&this.heap[parentIdx]<this.heap[idx]){
//             parentIdx=rightchildIdx
//         }
//         if(parentIdx!==idx){
//             [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
//             this.bubbledown(parentIdx)
//         }
//     }
// }

// const heap = new Heap();
// heap.insert(10);
// heap.insert(20);
// heap.insert(30);
// heap.insert(5);
// heap.insert(40);

// console.log(heap.heap)
