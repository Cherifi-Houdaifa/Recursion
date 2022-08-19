// None Recursive
const fibs = (n) => {
    let sequence = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let temp = b;
        b = a + b;
        a = temp;
    }
    return sequence;
};

// Recursive
const fibsRec = (n) => {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    // n = 3
    let arr1 = fibsRec2(n - 1);
    let arr2 = fibsRec2(n - 2);
    let currentN = arr1[arr1.length - 1] + arr2[arr2.length - 1];
    arr1.push(currentN);
    return arr1;
};
