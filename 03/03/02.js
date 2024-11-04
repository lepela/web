let number = 20;
// 14[16]  10100[2]

let binaryNumber = number.toString(2);
let hexNumber = number.toString(16);

console.log(binaryNumber, hexNumber);

let result = parseInt(binaryNumber, 2);
console.log(result);

const str = "가나다라 가나다라 가나다라";
console.log(str.charAt(2), str[2]);
console.log(str.slice(1, 3), str.substring(1,3), str.substr(1,3));
console.log(str.replace('가', '마'), str.replaceAll('가', '마'));

// charCodeAt(idx)
// 11172
// console.log(588 * 19);

let s = "";
for(let i = 0 ; i < 26 ; i++) {
    s += String.fromCharCode(65+i);
}
console.log(s.charCodeAt(0));

const arr = [10, 20, 3, 40, 5];
arr.sort((a, b) => a - b);
arr.sort(function(a, b) {
    return b - a;
})
console.log(arr);

// for in
// for of
for(let i of arr) {
    console.log(i);
}

const multi = [
    [1,2,3,4],
    [3,4,5],
    [2,3,4]
];

for(let i in multi) {
    for(let j in multi[i]) {
        console.log(multi[i][j]);
    }
}

for(let sub of multi) {
    for(let value of sub) {
        console.log(value);
    }
}






 


