const person = {
  name: 'Ricardo',
  goingDo() {
    return `Eu sou ${this.name}`
  }
}

console.log(person.goingDo()) // Eu sou Ricardo

const personDo = person.goingDo
console.log(personDo) // Eu sou Ricardo


// Para nao dar conflito de paradigmas (funcional, OOP), usar metodo .bind()

const personDo_2 = person.goingDo.bind(person)

console.log(personDo_2()) // Eu sou Ricardo