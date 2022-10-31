const arr = [1, 2, 3, 4, 5, 6, 7];
const size = arr.length;
const target = 22;

const binarySearch = ( arr, size, target ) => {
    let left = 0, right = size-1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
};

console.log(binarySearch(arr, size, target));
