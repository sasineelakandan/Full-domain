
let a=["eat", "tea", "tan", "ate", "nat", "bat"]


let map=new Map()

for(let i=0;i<a.length;i++){
    let sortedword= a[i].split('').sort().join('')

    if(!map.has(sortedword)){
        map.set(sortedword,[])
    }
    map.get(sortedword).push(a[i])
}

console.log(Array.from(map.values()))