let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let sum = 0;
let maxSum = arr[0]
let i = 0

while(i<arr.length){
  sum += arr[i]
  if(sum>maxSum){
    maxSum = sum
  }
  if(sum<0){
    sum = 0
  }
  i++
}

console.log(maxSum)