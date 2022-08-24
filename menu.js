var bur = document.getElementById('burguer')
var itens = document.getElementById('itens')

function clickMenu() {
    if(itens.style.display == 'block') {
        itens.style.display = 'none'
        bur.innerHTML = `<span id="burguer" class="material-icons">menu</span>`               
    } else {
        itens.style.display = 'block'        
        bur.innerHTML = `<span id="burguer" class="material-icons">close</span>`        
    }

}
