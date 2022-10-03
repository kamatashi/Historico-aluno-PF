const materias = [{
  anoLetivo: 2017.1,
  codigo: "ADM0002",
  CH: 60,
  freq: 80,
  nota: 7,
},

{
  anoLetivo: 2017.1,
  codigo: "COMP0197",
  CH: 60,
  freq: 80,
  nota: 4,
},

{
  anoLetivo: 2018.2,
  codigo: "COMP0210",
  CH: 60,
  freq: 80,
  nota: 5,
},
{
  anoLetivo: 2018.1,
  codigo: "MAT0067",
  CH: 60,
  freq: 80,
  nota: 4,
}]


module.exports = function bigPower(){

  // Funções auxiliares
  const soma = (y, x) => y + x
  const somatorio = (valores) => valores.reduce(soma)
  const ehInteiro = numero => divisor => {
    // Caso base
    if (numero == 0) return 0
    else if (numero == 1) return 1
    else if (numero == divisor) return 1
    else if (numero < divisor) return 'O divisor é maior que o numerador. O resultado não seria um número inteiro.'
    else return ehInteiro(numero)(divisor + 1)
  }
  const decimal = (lista) => lista.map(ehInteiro)
  const filtroNotas = (lista) => lista.map((x) => x.nota)
  const media = (lista) => somatorio(lista) / lista.length
  const ifelse = (lista) => lista.filter((x) => Number.isInteger(x))
  const alteraSituacao = (lista) => lista.map(item => item.codigo)
  
  
  
  //função que calcula média aritmética ponderada  
  const mediaPonderada = (lista) => somatorio(lista.map((x) => x.nota * x.CH)) / lista.length
  //console.log("A média ponderada entre suas notas e carga horária é " + (mediaPonderada(materias)) + "\n")
  
  
  //função que calcula o desvio-padrão   
  const desvioPadrao = (materias) => {
    const desvioPadrao = (lista) => lista.map((x) => ((x - media(filtroNotas(materias))) ** 2 / lista.length))
    const desvioParcial = desvioPadrao(filtroNotas(materias))
    return Math.sqrt(somatorio(desvioParcial))
  }
  
  
  
  //aprovado e reprovado
  const aprovado = (lista) => lista.filter((x) => x.nota >= 5)
  const reprovado = (lista) => lista.filter((x) => x.nota < 5)
  
  
  //carga horaria total cursada
  const somar = (lista) => lista.reduce(soma, 0)
  const cargaHoraria = (lista) => lista.map((item) => item.CH)
  const todaCargaHoraria = somar(cargaHoraria(materias))
  
  
  const selecDepartamento = (codigo='') => (lista) => mediaPonderada(lista.filter((x)=> x.codigo.replace(/[0-9]/g,'') == codigo))
  
  
  //função de seleção e média ponderada por departamento
  
  //quantos periodos a pessoa fez
  const filtroPeriodo = (lista) => lista.map((x) => x.anoLetivo)
  const organizar = (lista) => lista.sort((a, b) => (a - b))
  const ultimo = (lista) => lista[lista.length - 1]
  const primeiro = (lista) => lista[0]
  const ano = ((ultimo(organizar(filtroPeriodo(materias))) - primeiro(organizar(filtroPeriodo(materias)))))
  const periodo = Math.trunc(((ultimo(organizar) - primeiro(organizar)) + 0.4) * 2)
  
  
  // Logs (Visualização na prática)
  console.log(`Média Ponderada: ${mediaPonderada(materias)}
    Aprovado em    : ${alteraSituacao(aprovado(materias))}
    Reprovado em   : ${alteraSituacao(reprovado(materias))}
    Carga horária  : ${todaCargaHoraria} horas
    Desvio Padrão  : ${desvioPadrao(materias)}`)
}
