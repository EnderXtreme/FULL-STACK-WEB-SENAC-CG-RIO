nome = document.querySelector("#descriptografado")
//criptografando
codigo = btoa(nome)
console.log(codigo)
resposta = atob (codigo)
console.log(resposta)

