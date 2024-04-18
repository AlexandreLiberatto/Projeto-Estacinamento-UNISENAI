// Função para alterar o elemento <li> com base no número da vaga
function alterarLi(numero) {
    var li = document.getElementById('vg' + numero);
    if (li) {
        li.textContent = `Vaga ${numero} Ocupada`;
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

// Adicionando um ouvinte de evento para o evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Adicionar evento de clique ao botão de resetar histórico
    document.getElementById('resetarHistorico').addEventListener('click', resetLocalStorage);
});

// Função para limpar o histórico no localStorage
function resetLocalStorage() {
    localStorage.removeItem('vagasOcupadas');
    alert('Histórico de vagas ocupadas resetado com sucesso!');
}
