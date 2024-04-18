// Selecionando o formulário de registro de carros
const frm = document.querySelector("#form");

// Selecionando a tabela para atualizar
const tabela = document.getElementById("tabela");

let carros = [];

// Adicionando um ouvinte de evento para o formulário de registro de carros
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = frm.modelo.value;
    const placa = frm.placa.value;
    const cor = frm.cor.value;
    const proprietario = frm.proprietario.value;
    const apartamento = Number(frm.apartamento.value);
    const bloco = frm.bloco.value;
    const vaga = Number(frm.vaga.value);

    if (vaga <= 0 || vaga > 30) {
        alert("Digite um número de 01 à 30...");
        return
    };

    const carro = { modelo, placa, cor, proprietario, apartamento, bloco, vaga };
    carros.push(carro);

    // Armazenar os dados do formulário no sessionStorage
    sessionStorage.setItem('carro', JSON.stringify(carro));

    frm.reset();
    atualizarTabela();

    let vagasOcupadas = JSON.parse(localStorage.getItem('vagasOcupadas')) || [];
    vagasOcupadas.push(vaga);
    localStorage.setItem('vagasOcupadas', JSON.stringify(vagasOcupadas));

    if (modelo == " " || placa == " " || cor == " " || proprietario == " " ||
    apartamento == 0 || bloco == " " || vaga == 0) {
      alert("Preencha os campos corretamente!")
    } else {
        alert("Cadastro realizado com sucesso!")
    }
});


// Função para atualizar a tabela de carros
function atualizarTabela() {
    let tabelaHTML = `
        <tr>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Cor</th>
            <th>Proprietário</th>
            <th>Apartamento</th>
            <th>Bloco</th>
            <th>Vaga</th>
        </tr>
    `;
    
    carros.forEach(carro => {
        tabelaHTML += `
            <tr>
                <td>${carro.modelo}</td>
                <td>${carro.placa}</td>
                <td>${carro.cor}</td>
                <td>${carro.proprietario}</td>
                <td>${carro.apartamento}</td>
                <td>${carro.bloco}</td>
                <td>${carro.vaga}</td>
            </tr>
        `;
    });

    // Armazenar os dados da tabela no localStorage
    localStorage.setItem('tabela', tabelaHTML);

    tabela.innerHTML = tabelaHTML;
}

// Adicionando um ouvinte de evento para o evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Recuperar os dados do formulário do sessionStorage
    const carro = JSON.parse(sessionStorage.getItem('carro'));

    if (carro) {
        document.getElementById('modelo').value = carro.modelo;
        document.getElementById('placa').value = carro.placa;
        document.getElementById('cor').value = carro.cor;
        document.getElementById('proprietario').value = carro.proprietario;
        document.getElementById('apartamento').value = carro.apartamento;
        document.getElementById('bloco').value = carro.bloco;
        document.getElementById('vaga').value = carro.vaga;
    }

    // Recuperar os dados da tabela do localStorage
    const tabelaHTML = localStorage.getItem('tabela');

    if (tabelaHTML) {
        tabela.innerHTML = tabelaHTML;
    }
});

// Função para limpar o histórico no localStorage e a tabela de carros
function resetLocalStorage() {
    localStorage.removeItem('historico');
    localStorage.removeItem('tabela');
    alert('Histórico resetado com sucesso!');
    limparTabela();
}

// Função para limpar a tabela de carros na página
function limparTabela() {
    carros = [];
    atualizarTabela();
}

// Adicionar evento de clique ao botão de reset
document.getElementById('resetar').addEventListener('click', function() {
    resetLocalStorage();
});

// Adicionar evento de clique ao botão de reset na tabela
document.getElementById('resetar-tabela').addEventListener('click', function() {
    limparTabela();
});
