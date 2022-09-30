//função genérica de somatório à ser usada nos processos
const somatorio = (acc, x) => acc + x

//media aritimética
const media = (lista) => lista.reduce(somatorio, 0)/lista.length
const listaG = [1,2,3]

console.log(media(listaG))

/*/função que calcula média aritmética ponderada
const mediaPonderada = (lista) => lista.map((x)=>x.cargaHoraria*x.nota)
const mediaPondParc = mediaPonderada(mediaPonderada)
const medPonderadaFim = mediaPonderada.reduce(somatorio, 0)/mediaPonderada.length
console.log(medPonderadaFim)*/

//função que calcula o desvio-padrão 
const desvioPadrao = (lista) => lista.map((x)=> ((x-media(listaG))**2/lista.length))
const desvioParc = desvioPadrao(listaG)
const desvPadFim = desvioParc.reduce(somatorio, 0)
console.log(Math.sqrt(desvPadFim))
