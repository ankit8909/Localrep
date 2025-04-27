const a=[34,56,33];
const b =[34,43,21];
console.log(a[0]===b[0]);  // element of arry checking.

let add = 10+ +10;
console.log(add);

const sameValue = [12,34,12,56,13,12];
const duplicateValue = new Set(sameValue);
console.log(duplicateValue);

const object1 = {
    firstName : "Ankit",
    lastname: "kumar",
    age:24
}

console.log(delete object1.age);
console.log(object1)

const arr = [12,23,3,564,43];
delete arr[2];
delete arr[1]
console.log(arr)