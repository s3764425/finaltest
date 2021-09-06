const arr = [2, 5, 9, 6]

function contains(arr, number){
    for(let i = 0; i< arr.length; i++){
        if (number === arr[i]){
            return '[True]'
        }
    }
    return '[False]'
}

console.log(contains(arr, 10))
