class Node{
   constructor(){
    this.childrens={}
    this.isEnd=false
   } 
}


class trai{
    constructor(){
        this.root=new Node()
    }


    insert(word){
       let curr=this.root

       for(let i=0;i<word.length;i++){
        if(!curr.childrens[word[i]]){
            curr.childrens[word[i]]=new Node()
        }
        curr=curr.childrens[word[i]]
       }
       curr.isEnd=true
    }

    priffix(word){
      let curr=this.root
      for(let i=0;i<word.length;i++){
        if(!curr.childrens[word[i]]){
            return false
        }
        curr=curr.childrens[word[i]]
      }
    return curr

    }

    
}


let Trai=new trai()
Trai.insert('sasi')
Trai.insert('sathish')

console.log(JSON.stringify(Trai.root))