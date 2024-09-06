let Promises=new Promise((resolve,rejects)=>{
    let data=true
    if(data){
       resolve('task finish')
    }else{
        rejects('task fail')
    }
})


Promises.then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})


