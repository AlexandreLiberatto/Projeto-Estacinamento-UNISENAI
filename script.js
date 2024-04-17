
const frm = document.querySelector("form");
const tabela = document.getElementById("tabela");

let carros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = frm.modelo.value;
    const placa = frm.placa.value;
    const cor = frm.cor.value;
    const proprietario = frm.proprietario.value;
    const apartamento = Number(frm.apartamento.value);
    const bloco = frm.bloco.value;
    const vaga = Number(frm.vaga.value);

    const carro = { modelo, placa, cor, proprietario, apartamento, bloco, vaga };
    carros.push(carro);

    frm.reset();
    atualizarTabela();

    if (modelo == " " || placa == " " || cor == " " || proprietario == " " ||
    apartamento == 0 || bloco == " " || vaga == 0) {
      alert("Preencha os campo corretamente!")
    } else {
        alert("Cadastro realizado com sucesso")
    }
});

function atualizarTabela() {
    tabela.innerHTML = `
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
        tabela.innerHTML += `
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
}
