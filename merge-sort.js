const mergeArr = (leftArr, rightArr, leftSize, rightSize) => {
    let arr = [];
    for (var i = 0, j = 0; i < leftSize && j < rightSize; ) {
        if (leftArr[i] <= rightArr[j]) {
            arr.push(leftArr[i]);
            i++;
        } else {
            arr.push(rightArr[j]);
            j++;
        }
    }

    if (i !== leftSize) {
        while (i < leftSize) {
            arr.push(leftArr[i]);
            i++;
        }
    }
    if (j !== rightSize) {
        while (j < rightSize) {
            arr.push(rightArr[j]);
            j++;
        }
    }
    return arr;
};

const mergeSort = (arr, size) => {
    if (size < 2) {
        return arr;
    }
    let leftArr = arr.slice(0, size / 2);
    let rightArr = arr.slice(size / 2, size);

    leftArr = mergeSort(leftArr, leftArr.length);
    rightArr = mergeSort(rightArr, rightArr.length);

    return mergeArr(leftArr, rightArr, leftArr.length, rightArr.length);
};