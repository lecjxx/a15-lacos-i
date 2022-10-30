let coxinha = prompt("Você deseja comer mais coxinhas? Escolha uma opção \n S - sim \n N - não").toUpperCase()
valor = 0

while (coxinha !== "N") {
    valor = valor + 2.50
    coxinha = prompt("Você deseja comer mais coxinhas? Escolha uma opção \n S - sim \n N - não").toUpperCase()
}

alert(`O VALOR TOTAL FOI DE ${valor}`)