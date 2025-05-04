let str=prompt("string kiriting:");
let num=Number(prompt("necha marta takrorlansin:"));
function char() {
    let newstr="";
    if (num==0) {
        console.log(newstr);
    }
    else{
        for (let i = 1; i <= num; i++) {
            newstr+=str;
        }
    }
    return newstr;
}
console.log(char(str,num));