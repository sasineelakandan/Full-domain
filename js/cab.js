let a={
    greet:function(name){
      console.log(this.name)
    }
}

a.greet.call({name:'sasi'})

let b={
    greet:function(name){
      console.log(name)
    }
}

b.greet.apply(null,['sasi'])