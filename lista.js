function mostrarNovaTarefa() {
    var Pesquisa = document.getElementById("pesquisa")

    var Li = document.createElement("li")

    Li.innerText = Pesquisa.value

    var Lista = document.getElementById("novaLista")
    Lista.prepend(Li)

    Pesquisa.value = ""

}