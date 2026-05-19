const arr = [8,2,1,5,12,9,27,16]

for(let i = 0; i<arr.length; i++){
    let key = arr[i]
    let j = i-1

    while(j>=0 &&  key<=arr[j]){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = key 
}
console.log(arr)