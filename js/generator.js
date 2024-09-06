

function *gn(){
    for(let i=1;i<=10;i++){
        if(i%2==0){
            yield i
        }
    }
}

let res = gn(10)
for(let i=0;i<10/2;i++){
    if(res==undefined){
        break
    }
  //  console.log(res.next().value)
}


function fac(name,age,place){
    return {
        name,
        age,
        place
    }
}
//console.log(fac("hari",23,"cbe"))


function person(name,age){
    this.name = name,
    this.age = age,
    (this.greet=()=>{
        console.log(this.name+"  "+this.age)
    })()
}

let res1 = new person("hari",23)
