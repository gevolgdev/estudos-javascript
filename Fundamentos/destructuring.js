
// 📝 Desestruturação de objetos -> Tirar algo de uma estrutura

const gevolg = {
  owner: 'Ricardo',
  workers: 1,
  place: 'home',
  studying: true,
  projects: {
    amount: 3,
    priceTotal: 2.100,
    timeTotal: '2 years'
  }
}

const { owner: CEO} = gevolg
console.log(CEO) // 'Ricardo'

const { age = 3 } = gevolg
console.log(age) // 3

const { projects: { amount }} = gevolg
console.log(amount) // 3


// 📝 Desestruturação de Arrays -> Tirar algo de uma estrutura

const whatILike = ['javascript', 'coffe', 'design', 'danielle', 'money']

const [item1, , item3, item4, , item5 = 'friends'] = whatILike
console.log(item1, item3, item4, item5) // 'javascript', 'design', 'danielle', 'friends'



// 📝 Desestruturação de objetos em functions -> Tirar algo de uma estrutura

function number({min = 0, max = 100}) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}
let numbers = { 
  min: 30,
  max: 35,
}

console.log(number(numbers)) // 33


// 📝 Desestruturação de arrays em functions -> Tirar algo de uma estrutura

function numbers_1([min = 0, max = 100]) {
  if (min > max) [min, max] = [max, min]
  const value = Math.random() * (max - min) + min

  return Math.floor(value)
}

console.log(numbers_1([50, 60])) // 51, 52, 53, ...
console.log(numbers_1([60])) // + 60 até 100
console.log(numbers_1([, 10])) // - 10 até 0