let arr = [2,5,8,13,16,22,25,29,33,34,69,70]
let i = 0
let j = arr.length-1
let mid = 0
let target = 33
let ans = 0
while(i<=j){
  mid = Math.floor((i + j) / 2)
  if(arr[mid] == target){
    ans =  `you elem is presnet on ${mid} index`
    break
  }
  if(arr[mid] < target){
    i = mid+1
    ans = `you elem is presnet on ${mid} index`
  }else{
    j = mid-1
    ans  = `you elem is presnet on ${mid} index`
  }
}

console.log(ans)
