   export const toggle=()=>{
    const butt= document.getElementById('btn')
    if(butt.innerHTML==='block'){
      butt.innerHTML='unblock'
    }else{
      butt.innerHTML='block'
    }
  }