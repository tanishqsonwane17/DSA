let arr = [1,1,0,1,0,2,1,0,1,2,1,0]
let i = 0
let j = 0
let k = arr.length-1

while(i<=k){
  if(arr[i] == 0){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j++
    i++
  }
  if(arr[i] == 2){
    let temp = arr[i]
    arr[i] = arr[k]
    arr[k] = temp
    k--

    if(arr[i] == 0){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j++
    }
  }
  else{
    i++
  }
}

console.log(arr)
