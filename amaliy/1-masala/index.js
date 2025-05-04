let row=Number(prompt("qatorlar soni:"));
let col=Number(prompt("ustunlar soni:"));

for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
        if (i == 1 || i==row || j==1 || j==col) {
            console.log("*");
        }
        else{
            console.log(" ");
        }
    }
    console.log("\n");
}