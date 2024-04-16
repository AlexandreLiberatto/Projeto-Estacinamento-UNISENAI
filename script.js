(function () { /* Função para evitar que o usuário acesse as variáveis */

const frm = document.querySelector("form");

frm.addEventListener("click", (e) => {
e.preventDefault();

const model = frm.modelo.value;
const plac = frm.placa.value;
const corr = frm.cor.value;
const propri = frm.proprietario.value;
const aparta = Number(frm.apartemento.value);
const bloc = frm.bloco.value;
const vag = Number(frm.vaga.value);



});


})();

