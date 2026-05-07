let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8,10]
let newArr = new Array( arr1.length + arr2.length )
let i = 0;
let j = 0;
let k = 0

while(arr1[i] < arr1.length && arr2[j]<arr2.length){
  if(arr1[i] < arr2[j]){
    newArr[k++] = arr1[i++]
  }
  else{
    newArr[k++] = arr2[j++]
  }
}

while(i<arr1.length){
  newArr[k++] = arr1[i++]
}
while(j<arr2.length){
  newArr[k++] = arr2[j++]
}

console.log(newArr)