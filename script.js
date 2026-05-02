const arr = [1,2,3,4,5,6,7,8,9]
let target = 5
let index = -1
for(let i = 0; i<arr.length; i++){
    if(arr[i] == target){
      index = i
      break
    }
}

console.log(index==-1?"value not found" : `value found at index ${index}`)