// class Node{
//    constructor(){
//     this.childrens={}
//     this.isEnd=false
//    } 
// }


// class trai{
//     constructor(){
//         this.root=new Node()
//     }


//     insert(word){
//        let curr=this.root

//        for(let i=0;i<word.length;i++){
//         if(!curr.childrens[word[i]]){
//             curr.childrens[word[i]]=new Node()
//         }
//         curr=curr.childrens[word[i]]
//        }
//        curr.isEnd=true
//     }

//     priffix(word){
//       let curr=this.root
//       for(let i=0;i<word.length;i++){
//         if(!curr.childrens[word[i]]){
//             return false
//         }
//         curr=curr.childrens[word[i]]
//       }
//     return curr

//     }

    
// }
// class Node{
//     constructor(){
//         this.childrens={}
//          this.isEnd=false
//     }
// }
// class trai{
//     constructor(){
//         this.root=new Node()
//     }

//     insert(word){
//         let curr=this.root
//         for(let i=0;i<word.length;i++){
//             if(!curr.childrens[word[i]]){
//                 curr.childrens[word[i]]=new Node()
//             }
//             curr=curr.childrens[word[i]]
//         }
//        curr.isEnd=true
//     }

//     autofill(word){
//         let curr=this.root
//         for(let i=0;i<word.length;i++){
//             if(!curr.childrens[word[i]]){
//                 return []
//             }
//             curr=curr.childrens[word[i]]
//         }

//         return this.print(curr,word,[])
//     }

//     print(node,str,values){

//     if(node.isEnd==true){
//         values.push(str)
//     }

//     for(let key in node.childrens){

//         this.print(node.childrens[key],str+key,values)
//     }

//     return values

//     }
// }

// let Trai=new trai()
// Trai.insert('sasi')
// Trai.insert('sathish')
// console.log(Trai.autofill('s'))


let user = null;
console.log(user)