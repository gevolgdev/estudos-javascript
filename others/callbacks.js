
function calculadora(a,b, operacao) {

  return operacao(a,b)
}

const adicao = (a,b) => a + b
const subtracao = (a,b) => a - b
const divisao = (a,b) => a / b
const multiplicacao = (a,b) => a * b

const calculo = calculadora(5, 10, adicao)

console.log(calculo) // 15