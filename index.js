const limparCampos = () => {
    document.getElementById("periodo").value = ""
    document.getElementById("codigo").value = ""
    document.getElementById("cargaHoraria").value = ""
    document.getElementById("nota").value =""
    document.getElementById("frequencia").value   = ""
}
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit",(event)=> {
    event.preventDefault ();
    const {periodo,codigo,cargaHoraria,nota,frequencia} = event.target
    const curso = {
        periodo:parseFloat(periodo.value),
        codigo:codigo.value,
        cargaHoraria:parseInt(cargaHoraria.value),
        nota:parseFloat(nota.value),
        frequencia:parseFloat(frequencia.value)


    }
    limparCampos()
    const materias = JSON.parse(window.localStorage.getItem("chave")) || []
    window.localStorage.setItem("chave",JSON.stringify([...materias,curso]))
    console.log(materias)
} )

console.log(formulario)
