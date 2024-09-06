let a=[8,2,3,5,7,90,4]

function binarySerch(arr,target,left=0,right=arr.length-1){
    arr.sort()
  
    while(left<=right){
        let mid=Math.floor((left+right)/2)

        if(arr[mid]===target){
            return mid
        }

        if(arr[mid]>target){
            right=mid-1
        }else{
            left=mid+1
        }
    }

    return -1
        
    


}

console.log(binarySerch(a,4))