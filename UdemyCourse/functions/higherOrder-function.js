/*

  Principais tipos de funções no Javascript

  1 • Forma literal
  2 • Armazenar em uma variavel
  3 • Armazenar em um array
  4 • Armazenar em um atributo de objeto
  5 • Passar função como parâmetro
  6 • Uma função pode retornar/conter uma função

  📝 Higher Order Functions

  Funções de ordem superior em JavaScript são aquelas que podem receber e/ou retornar outras funções. 
  Essas funções são muito usadas em operações com arrays, como map, filter e reduce, proporcionando maior 
  flexibilidade e abstração no código. Ao utilizar funções de ordem superior em JavaScript, os desenvolvedores 
  podem escrever código mais elegante e eficiente para resolver problemas complexos.

*/

// 1
function soma(a, b) {
  return a + b
}

// 2
const divisao = function(a, b) {return a * b}

// 3
let array = [soma, divisao]
console.log(array[0](1,2))

// 4
const objeto = {
  falar: function(frase){
    return frase
  }
}
console.log(objeto.falar('Salve'))

// 5
function children(func) {
  func()
}
children(function() { return 'Children'})

// 6
function jsLover(param1, param2) {
  return function(param3) {
    console.log('JS <3')
  }
}
const func = jsLover(1, 2)

func(3)
