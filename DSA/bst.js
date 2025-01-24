// class Node{
//     constructor(val){
//         this.val=val
//         this.left=null
//         this.right=null
//     }
// }


// class bst{
//     constructor(){
//         this.root
//     }

//     insert(val){
//         let node=new Node(val)
//         if(this.root==null){
//             this.root=node
//             return this
//         }
//         else{
//             let curr=this.root
//         while(true){
//             if(curr.val<val){
//                 if(curr.left==null){
//                     curr.left=node
//                     return this
//                 }else{
//                     curr=curr.left
//                 }
//             }else{
//                 if(curr.right==null){
//                     curr.right=node
//                     return this
//                 }else{
//                     curr=curr.right
//                 }
//             }
//         }
//         }
//     }

// dfs(){
//  let curr=this.root
//  let data=[]
//  let left=0
//  function trvisal(node){
//   data.push(node.val)
//   if(node.left){
//     left++
//     if(left==3){
//         console.log(node.val)
//     }
//     trvisal(node.left)
//   }
//   if(node.right){
    
//     trvisal(node.right)
//   }
//  }

//  trvisal(curr)

//  return data
// }

 
// }

// const bst2=new bst()

// bst2.insert(10)
// bst2.insert(20)
// bst2.insert(30)
// bst2.insert(40)
// bst2.insert(50)
// console.log(bst2.dfs())
// console.log(JSON.stringify(bst2.root))


// class Node{
//     constructor(val){
//         this.val=val
//         this.left=null
//         this.right=null
//     }
// }


// class bst{
//     constructor(){
//        this.root
//     }

//     insert(val){
//         let node=new Node(val)
//       if(this.root==null){
//         this.root=node
//         return this
//       }else{
//         let curr=this.root
//        while(true){
//         if(val<curr.val){
//             if(curr.left==null){
//                curr.left=node
//                return this
//             }
//             curr=curr.left
//        }else{
//         if(curr.right==null){
//             curr.right=node
//             return this
//         }
//         curr=curr.right
//        }
//         }
//       }
//     }
//     dfs(){
//         let curr=this.root
//         let data=[]
//         let max=curr.val

//         function travisal(node){
//            data.push(node.val)
          
//            if(node.val<max){
//             max=node.val
//            }
//            if(node.left){
//              travisal(node.left)
//            }

//            if(node.right){
//             travisal(node.right)
//            }
//         }
//         travisal(curr)
//         return max
//     }
// }

// const bst2=new bst()

// bst2.insert(60)
// bst2.insert(20)
// bst2.insert(30)
// bst2.insert(40)
// bst2.insert(50)
// console.log(bst2.dfs())
// console.log(JSON.stringify(bst2.root))

// function stack(arr){
//     let tempStack=[]
//   while(arr.length){
//     let temp=arr.pop()
//     while(tempStack.length&&tempStack[tempStack.length-1]>temp){
//         arr.push(tempStack.pop())
//     }
//     tempStack.push(temp)
//   }
//   return tempStack
// }
// let array=[1,9,8,7,5,4,2]
// console.log(stack(array))
// function* genTwoHundered() {
//     for (let i = 100; i >= 0; i -= 2) {
//       yield i;
//     }
//   }
//   const twoHundered = genTwoHundered();
//   const start = performance.now();
//   for (let i of twoHundered) {
//     console.log(i);
//     if (performance.now() - start > 300) break;
//   }
// let obj={name:'sasi'}

// const handler={
//   get:(target,property)=>{
//     if(target[property]){
//         return target[property]
//     }else{
//         return 'no value'
//     }
    
//   }
// }


// const proxy=new Proxy(obj,handler)

// console.log(proxy.age)

// function mergeSort(arr){
//   if(arr.length<=1){
//     return arr
//   }
// let mid=Math.floor(arr.length/2)
//   let left=mergeSort(arr.slice(0,mid))
//   let right=mergeSort(arr.slice(mid))
//   return merge(left,right)

// }

// function merge(arr,arr1){
//     let result=''
//     let i=0
//     let j=0
//     while(i<arr.length&&j<arr1.length){
//         if(arr[i]<arr1[j]){
//            result+=arr[i]
//            i++
//         }else{
//            result+=arr1[j]
//            j++
//         }
//     }
//    result+=arr.slice(i)+arr1.slice(j)
//    return result
// }

// let str='sasi'

// let a=mergeSort(str)
// console.log(a)

// function mergeSortString(str) {
//     // Base case: If the string length is 0 or 1, it's already sorted
//     if (str.length <= 1) {
//       return str;
//     }
  
//     // Split the string into two halves
//     const mid = Math.floor(str.length / 2);
//     const left = mergeSortString(str.slice(0, mid));
//     const right = mergeSortString(str.slice(mid));
  
//     // Merge the two sorted halves
//     return mergeStrings(left, right);
//   }
  
//   function mergeStrings(left, right) {
//     let result = '';
//     let i = 0, j = 0;
  
//     // Compare characters from both halves and concatenate the smaller one
//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) {
//         result += left[i];
//         i++;
//       } else {
//         result += right[j];
//         j++;
//       }
//     }
  
//     // Append any remaining characters from `left` or `right`
//     result += left.slice(i) + right.slice(j);
  
//     return result;
//   }
  
//   // Example usage
//   const inputString = "sasi";
//   const sortedString = mergeSortString(inputString);
//   console.log(sortedString)

// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([9,4,7,1,2,6]))

// function insertSort(arr){
 
//     for(let i=0;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1

//         while(j>=0&&arr[j]>curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }


// console.log(insertSort([9,4,7,1,2,6]))


// function insertSort(arr){
//   for(let i=0;i<arr.length;i++){
//     let curr=arr[i]
//     let j=i-1

//     while(j>=0&&arr[j]>curr){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=curr
//   }
//   return arr
// }

// console.log(insertSort([9,4,7,1,2,6]))