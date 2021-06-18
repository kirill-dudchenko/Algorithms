const binarySearch = (array, value) => {

    let low = 0
    let high = array.length - 1

    while (low <= high) {
        let mid = Math.round((low + high) / 2)
        if (array[mid] === value) return mid
        if (array[mid] > value) high = mid - 1
        else low = mid
    }
    return "No such element"
}

const array = [256, 1025, 3300, 10000, 11256]

array.forEach((number) => console.log(binarySearch(array, number)))

console.log(binarySearch(array, 42))
