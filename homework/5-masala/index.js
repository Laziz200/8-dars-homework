function sumNumbersInObject(obj) {
    let values = Object.values(obj);
    
    return values
        .filter(val => typeof val === 'number' && !isNaN(val))
        .reduce((sum, num) => sum + num, 0);
}

let obj = {
    name: "usmon",
    age: 22,
    surname: "aliyev",
    birthyear: "2000",
    money: 4000
};

console.log(sumNumbersInObject(obj)); 