


function exibeMenu() {
    menuHam.style.display = "none"
    botao.style.display = "inline"
    MenuNavegacao.style.display = "block"




}

function eliminaMenu() {
    menuHam.style.display = "none"
    botao.style.display = "inline"
    MenuNavegacao.style.display = "none"




}
function verificaTela() {
    if (innerWidth < 1024) {
        menuHam.style.display = "inline"
        botao.style.display = "none"
        MenuNavegacao.style.display = "none"
    } else {
        menuHam.style.display = "none"
        botao.style.display = "none"
        MenuNavegacao.style.display = "flex"
    }
}
window.addEventListenerddEventListener("resize", verificaTela) 