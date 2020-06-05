//"use strict"

const selectEstados = $("select[name=uf]")
const selectCidades = $("select[name=city]")

selectEstados.addEventListener("change", () => {
        const ufValor = selectEstados.value
        selectCidades.innerHTML = `<option value>Selecone a cidade</option>`
        selectCidades.disabled = true
        
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValor}/distritos`)
        .then(res => res.json())
        .then(cidades => {

            cidades.forEach(cidade => {
                const optionCidade = montaOption(cidade.nome)
                selectCidades.appendChild(optionCidade)
            });
            selectCidades.disabled = false
        })
})
