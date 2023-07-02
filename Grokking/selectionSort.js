const findSmallest = (arr) => {
    let length = arr.length;
    let smallest = arr[0]
    smallestIndex = 0
    for (let i = 0; i < length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex;
}

const selectionSort = (arr) => {
    let length = arr.length;
    let newArr = []
    for (let i = 0; i < length; i++) {
        let smallest = findSmallest(arr) 
        newArr.push(arr[smallest])
        arr.splice(smallest, 1)
    }
    return newArr;
}

let testArray = [15, 27, 3, 10, 26, 57, 67, 12, 24]

console.log(selectionSort(testArray))
