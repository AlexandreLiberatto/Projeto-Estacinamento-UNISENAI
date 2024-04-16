
const frm = document.querySelector("form");
const tabela = document.getElementById("tabela");

let carros = [];

frm.addEventListener("click", (e) => {
e.preventDefault();

const model = frm.modelo.value;
const plac = frm.placa.value;
const corr = frm.cor.value;
const propri = frm.proprietario.value;
const aparta = Number(frm.apartemento.value);
const bloc = frm.bloco.value;
const vag = Number(frm.vaga.value);

const carro = { modelo, placa, cor, proprietario, apartamento, bloco, vaga };
carros.push(carro);

frm.reset();
atualizarTabela();

});