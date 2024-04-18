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

function verificarVagasDisponiveis() {
    let vagasOcupadas = JSON.parse(localStorage.getItem("vagasOcupadas")) || [];
    console.log("Vagas ocupadas:", vagasOcupadas);

    vagasOcupadas.forEach(vaga => {
        console.log("Alterando vaga:", vaga);
        alterarLi(vaga);
    });
}

// Adicionando um ouvinte de evento para o formulário
const frm = document.getElementById("form2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    verificarVagasDisponiveis();
});
