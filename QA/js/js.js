
// let i=0

// while(i<arr.length){
//     let start=i
//     if(arr[i]%2==0&&arr[i+1]%2==0){
        
//         while(arr[i]%2==0&&i<arr.length){
//             i++
//         }
//         arr.splice(start,i-start)
//         i=Math.max(0,start)
//     }else{
//         i++
//     }
// }

// console.log(arr)


// for(let i=0;i<arr.length;i++){
//     let notprime=false
//     for(let j=2;j<arr[i];j++){
//         if(arr[i]%j==0){
//          notprime=true
//         }
//     }
//     if(!notprime){
//         console.log(arr[i])
//     }
// }

// let big=-Infinity
// let sl=-Infinity
// let sm=Infinity
// let ssm=Infinity
// let tsm=Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>big){
//         sl=big
//         big=arr[i]
//     }

//     else if(arr[i]>sl&&arr[i]!=big){
//         sl=arr[i]
//     }
//     if(arr[i]<sm){
       
//        tsm=ssm
//        ssm=sm
//        sm=arr[i]
//     }
//     else if(arr[i]<ssm&&arr[i]!=sm){
//         tsm=ssm
//         ssm=arr[i]
        
//      }
//      else if(arr[i]<tsm&&tsm&&arr[i]!=ssm&&arr[i]!=sm){
//         tsm=arr[i]
//      }
// }
// console.log(sm,ssm,sl,big,tsm)
// let arr=[2,4,3,3,7,-8,8,88,5,6,87,9]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==1 && i!=0){
//         count++
//         for(let j=i+1;j<arr.length;j++){
//             let t = arr[j-1]
//             arr[j-1] = arr[j]
//             arr[j] = t
//         }
//     }
// }
// for(let i=0;i<count;i++){
//     arr.pop()
// }
// console.log(arr)


// let i=1

// do{
//   if(i%20==0){
//     console.log(i)
//   }
//   i++
// }while(i<=200)

// let a=10
// let b=10
// let c=10

// function step1(){
//     step2()
// }


// function step2(){
//     console.log(a+b+c)
// }

// function step3(){
//     step1()
// }

// step3()

