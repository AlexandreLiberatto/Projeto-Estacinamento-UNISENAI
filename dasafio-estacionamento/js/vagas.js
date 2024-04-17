// Função para alterar o elemento <li> com base no número da vaga
function alterarLi(numero) {
    var li = document.getElementById('vg' + numero);
    if (li) {
        li.textContent = 'Vaga Ocupada ' + numero;
        li.style.backgroundColor = 'red';
    } else {
        // Tenta novamente após 500ms
        setTimeout(() => alterarLi(numero), 500);
    }
}

// Adicionando um ouvinte de evento para o evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    let vagasOcupadas = JSON.parse(localStorage.getItem("vagasOcupadas")) || [];

    vagasOcupadas.forEach(vaga => {
        alterarLi(vaga);
    });
});
