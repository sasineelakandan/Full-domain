class Node{
   constructor(val){
    this.val=val
    this.left=null
    this.right=null
   }
}

class bst{
    constructor(){
        this.root=null
    }

    insert(val){
        let node=new Node(val)
        if(this.root==null){
            this.root=node
            return this
        }else{
            let curr=this.root
        while(true){
            if(val<curr.val){
                if(curr.left==null){
                    curr.left=node
                    return this
                }else{
                    curr=curr.left
                }
            }else{
                if(curr.right==null){
                    curr.right=node
                    return this
                }else{
                    curr=curr.right
                }
            }
           }
        }
    }

    dfs(){
     let data=[]
     let curr=this.root
     let countl=0
     let countr=0
     function travisal(node){
      data.push(node.val)
      if(node.left){
        travisal(node.left)
        countl++
      }
      if(node.right){
        travisal(node.right)
        countr++
      }
     }
     travisal(curr)
    console.log(countl,countr)
     return data
    }
}


const bst2=new bst()

bst2.insert(30)
bst2.insert(40)
bst2.insert(50)
bst2.insert(20)
bst2.insert(10)

console.log(bst2.dfs())