// 📝 Tramamento de erros


function fixError(error) {
  throw new Error('Mude para "Let"')
}


function somethingFunction(item) {  
  try {
    const value = item
    value = 321
    console.log(value)
  } catch (error) {
    fixError(error)
    console.log('catch ' + fixError(error))
  } finally {
    console.log('Finalizou')
  }
}

console.log('func ' + somethingFunction(123))
