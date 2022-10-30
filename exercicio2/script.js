let num = Number(prompt("Qual tabuada desejada?"))
let tabuada

for (let i = 0; i <= 10; i++) {
    tabuada = num*i
    
    console.log(`${num} x ${i} = ${tabuada}`);
}