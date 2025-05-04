// let arr=[1,2,3,4,5,6,7];
// function newarr() {
//     let a=[];
//     for (let i = 4; i < arr.length; i++) {
//         a.push(arr[i]);
//     }
//     for (let i = 0; i < arr.length-3; i++) {
//         a.push(arr[i]);
//     }
//     return a;
// }
// console.log(newarr(arr))
function moveToStart(arr, startIndex, endIndex) {
    let slicedPart = arr.slice(startIndex, endIndex + 1);

    let beforePart = arr.slice(0, startIndex);
    let afterPart = arr.slice(endIndex + 1);
    
    return slicedPart.concat(beforePart, afterPart);
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let start = 4; 
let end = 6;   

let newArr = moveToStart(arr, start, end);
console.log(newArr); 