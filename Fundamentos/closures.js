/*
    As closures mantêm o estado e o comportamento do escopo 
  externo, armazenando referências às variáveis e funções 
  necessárias para sua execução, mesmo quando o escopo 
  externo é destruído. 
    Isso permite que elas criem ambientes privados e 
  encapsulados e realizem operações complexas com base 
  em dados e comportamentos externos.
*/


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
