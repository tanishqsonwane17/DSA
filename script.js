let arr = [1,0,2,3,0,4,5,0]
let newArr = new Array(arr.length)

let i = 0;
let j = 0


while(i<arr.length){
  if(arr[i] != 0){
    newArr[j] = arr[i]
    j++
    i++
  }
  else{
    newArr[j] = arr[i]
    newArr[j+1] = arr[i]
    j+=2
    i++
  }
}
console.log(newArr)