class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}


class bst{
    constructor(){
        this.root
    }

    insert(val){
        let node=new Node(val)
        if(this.root==null){
            this.root=node
            return this
        }
        else{
            let curr=this.root
        while(true){
            if(curr.val<val){
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
 let curr=this.root
 let data=[]
 let left=0
 function trvisal(node){
  data.push(node.val)
  if(node.left){
    left++
    if(left==3){
        console.log(node.val)
    }
    trvisal(node.left)
  }
  if(node.right){
    
    trvisal(node.right)
  }
 }

 trvisal(curr)

 return data
}

 
}

const bst2=new bst()

bst2.insert(10)
bst2.insert(20)
bst2.insert(30)
bst2.insert(40)
bst2.insert(50)
console.log(bst2.dfs())
console.log(JSON.stringify(bst2.root))