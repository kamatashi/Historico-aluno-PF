//função genérica de somatório à ser usada nos processos

const somatorio = (acc, x) => acc + x


//função que calcula média aritmética ponderada


const mediaPonderada = (lista) => lista.map((x) => x.nota*x.CH ).reduce(somatorio, 0)/lista.map((x)=> x.CH).reduce(somatorio,0);
console.log("Média ponderada entre suas notas e carga horária: "+ (mediaPonderada(materias)) + "\n")


//função que calcula o desvio-padrão 

const media = (lista) =>lista.map((x)=> x.nota).reduce(somatorio, 0)/lista.length
const desvioParcial = (lista) => lista.map((x)=> (x.nota-media(materias))**2/lista.length).reduce(somatorio,0)
const desvioPadrao = Math.sqrt(desvioParcial(materias))
console.log("Desvio padrão da média geral: " + desvioPadrao + "\n")


//aprovado e reprovado

const alteraSituacao = (lista) => lista.map(item => item.codigo) + "\n"
const aprovado =  (lista) => lista.filter((x)=> x.nota >=5) 
const reprovado = (lista) => lista.filter((x)=> x.nota <5) 
const resultado = aprovado(materias) 
const resultado2 = reprovado(materias)
console.log("Matérias em aprovação: \n " + alteraSituacao(resultado) )
console.log("Matérias em reprovação: \n " + alteraSituacao(resultado2) )


//carga horaria total cursada

const somar = (lista) => lista.reduce(somatorio,0)
const cargaHoraria = (lista) => lista.map((item) => item.CH)
const todaCargaHoraria = somar(cargaHoraria(materias))
console.log("\nSua carga horária total: " + (todaCargaHoraria) + " horas")
//função de seleção e média ponderada por departamento

const selecDepartamento = (codigo='') => (lista) => mediaPonderada(lista.filter((x)=> x.codigo.replace(/[0-9]/g,'') == codigo))
console.log("\nMédia ponderada entre suas notas e carga horária do departamento requerido: " + selecDepartamento('COMP')(materias))

//quantos periodos a pessoa fez
const filtroPeriodo = (lista) => lista.map((x)=> x.anoLetivo)
const organizar = filtroPeriodo(materias).sort((a,b) => (a-b))
const ultimo  = (lista) => lista[lista.length-1] 
const primeiro = (lista) => lista[0] 
const periodo = Math.trunc(((ultimo(organizar)-primeiro(organizar))+0.4)*2)
console.log("\nPeríodos cursados: " + periodo)
