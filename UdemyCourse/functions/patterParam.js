/*

  📝 Parametros padrões, são valores que seus parametros terão caso você nao declarar nenhum valor a elas. 

*/

// Maneira "antiga"
function oldParams(a, b, c) {
  a = a !== undefined ? a : 1
  b = 2 in arguments ? b : 1
  c = isNaN(c) ? 1 : c

  return a + b + c
}
// console.log(oldParams()) // 3

// Maneira ES6
function modernParams(a = 1, b = 1, c = 1) {
  return a + b + c
}
// console.log(modernParams(2)) // 4

/*

  📝 `arguments` é uma especie de array nativo do Js, projetado para ser uma representação dos parametros de uma função.
  Ele não é um array proprimente dito pois não tem como usar métodos nele. Para isso, umsamos Array.from() e/ou 
  spread operator {...args}

*/

// Array.from()
function userNames() {
  const names = Array.from(arguments)
  const nameUser = names.map((item) => `Nome: ${item}`)

  return nameUser
}
console.table(userNames('Ricardo', 'NodeBR', 'Tigs', 'DaviPY'))

// Spread operator
function userNames_2(...args) {
  const nameUser = args.map((item) => `Usuário: ${item}`)

  return nameUser
}
console.table(userNames_2('Ricardo', 'NodeBR', 'Tigs', 'DaviPY'))

