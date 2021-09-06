const arr1 = [1, 2, 3]
const arr2 = [100, 2, 1, 10]

function difference(arr1, arr2){
    let arr3 = []

    for(let i = 0; i< arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            arr3.push(arr1[i])
        }
    }
    for(let j = 0; j < arr2.length; j++){
        if(!arr1.includes(arr2[j])){
            arr3.push(arr2[j])
        }
    }
    arr3.sort((a, b) => {
        return a-b
    })
    let arr4 = []
    for (let k = 0; k < arr3.length; k++){
        arr4.push(arr3[k].toString())
    }
    return arr4

}

console.log(difference(arr1, arr2))
