let arr = [56,78,96,54,11,22,33,45,78,48]
let num = 78
let index = -1

for(let i = 0; i<arr.length; i++){
    if(arr[i] == num ){
        index = i
        break
    }
}

console.log(index == -1?"number not found" : `number found at index ${index}`, )