const numeros = [2003.1,2004.2,2006.2,2005.1]
const organizar = (lista) => lista.sort((a,b) => (a-b))
const ultimo  = (lista) => lista[lista.length-1]
const primeiro = (lista) => lista[0] 
const periodo = ultimo(organizar(numeros))-primeiro(organizar(numeros))

console.log(organizar(numeros))
console.log(ultimo(numeros))
console.log(primeiro(numeros))
console.log(periodo)
