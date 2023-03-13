// Sorteio com premios personalizados.

const users = [
  {
    name: 'Mark', gift: 'Ipad Pro'
  }, 

  {
    name: 'Danny', gift: 'Weeding weekend'
  }, 

  {
    name: 'John', gift: 'Macbook Air M2'
  }, 

  {
    name: 'Robson', gift: 'Apartamet in Campinas'
  },
]

function sortName() {
  const random = Math.floor(Math.random() * users.length)
  
  return `${users[random].name} (${random + 1}), Prêmio: ${users[random].gift}`
}

console.log(`Name sorted: ${sortName()}.`)


