
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
// console.log(CEO)

const { age = 3 } = gevolg
// console.log(age)

const { projects: { amount }} = gevolg
// console.log(amount)


// 📝 Desestruturação de Arrays -> Tirar algo de uma estrutura

const whatILike = ['javascript', 'coffe', 'design', 'danielle', 'money']

const [item1, , item3, item4, , item5 = 'friends'] = whatILike
// console.log(item1, item3, item4, item5)



// 📝 Desestruturação de functions -> Tirar algo de uma estrutura

function number({min = 0, max = 100}) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}
let numbers = { 
  min: 30,
  max: 35,
}

console.log(number(numbers))