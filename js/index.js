const $modalSearch = document.querySelector("#modal")

document.querySelector(".search-point")
.addEventListener("click", () => {
    $modalSearch.classList.remove("hide")
})

document.querySelector(".close")
.addEventListener("click", () => {
    $modalSearch.classList.add("hide")
})



