
function amount(){
  let amount = 0

  // função anônima é o fechamento/closure
  return function() {
    amount++
    console.log(amount)
  }
}

// Essa variavel reserva o valor da closure/função anônima
const increment = amount()

increment() // 1
increment() // 2
increment() // 3
