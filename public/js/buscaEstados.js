"use strict"

const campoEstados = $("select[name=uf]")

const estados = fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => { return res.json() })
    .then(estados => { 
        estados.forEach(estado => {
            
            const option = montaOption(estado.sigla)
            campoEstados.appendChild(option)
        });
     })

function montaOption(dado){
    const option = document.createElement("option")
    option.value = dado
    option.textContent = dado
    return option
}

