const person = {
  name: 'Ricardo',
  goingDo: function() {
    return `Eu sou ${this.name}`
  }
}

console.log(person.goingDo()) // Eu sou Ricardo