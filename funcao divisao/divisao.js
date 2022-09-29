numero1 =parseInt( prompt("Insira um número inteiro"))
numero2 =parseInt( prompt("insira o segundo numero diferente de zero"))
while (numero2==0) {
    alert("Você digitou zero")
    numero2 =parseInt( prompt("insira o segundo numero diferente de zero"))
}

cociente = numero1/numero2

console.log(cociente)