var arr =
    [
        14, 4, 6, 6, 20, 8, 5, 6,
        8, 12, 6, 10, 14, 9, 17, 16, 9,
        7, 14, 11, 14, 15, 13, 11, 10, 18,
        13, 17, 17, 14, 17, 7, 9, 5, 10,
        13, 8, 5, 18, 20, 7, 5, 5, 15, 19, 14
    ];
var idx = 0;
let min = Infinity;
let max = -Infinity;
var n = arr.length;
var target = 22;
var count = 0;

subset(n, arr, idx, min, max, []);
console.log(count);

function subset(n, arr, idx, min, max, temp) {
    if (idx == n) {
        console.log(temp);
        return;
    }
    subset(n, arr, idx + 1, min, max, [...temp, arr[idx]]);
    subset(n, arr, idx + 1, min, max, temp);
}
