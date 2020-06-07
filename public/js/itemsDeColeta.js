"use strict"

const itensColeta = document.querySelectorAll(".items-grid li")
const inputColeta = $("input[name=items]")
let idColeta = []

itensColeta.forEach(item => {
    item.addEventListener("click", ItemsColeta)
})


function ItemsColeta(event) {
    let itemLi = event.target
    itemLi.classList.toggle("selected")

    let itemId = itemLi.dataset.id
    console.log(itemId)
    

    const encontrouItens = idColeta.includes(itemId)
    if (encontrouItens) {
        const filtrarItens = idColeta.filter(item => item != itemId)
        idColeta = filtrarItens
    } else {
        idColeta.push(itemId)
    }
    inputColeta.value = idColeta
}
