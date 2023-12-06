document.addEventListener("DOMContentLoaded", function() {
    var emCartazLink = document.getElementById("emCartaz");
    var emBreveLink = document.getElementById("emBreve");

    emCartazLink.addEventListener("click", function() {
        emCartazLink.classList.add("active");
        emBreveLink.classList.remove("active");
    });

    emBreveLink.addEventListener("click", function() {
        emBreveLink.classList.add("active");
        emCartazLink.classList.remove("active");
    });
});

// para gerar grade na pagina de assentos
const assentosContainer = document.getElementById('assentos-container');
const numeroDeAssentosPorLado = 14;
const numeroDeLinhas = 13;
const letrasFileira = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function criarAssentos() {
    for (let linha = 0; linha < numeroDeLinhas; linha++) {
        for (let assento = 1; assento <= numeroDeAssentosPorLado; assento++) {
            const assentoElement = document.createElement('div');
            assentoElement.classList.add('assento');
            
            // Adiciona a classe 'lateral' para os assentos laterais
            if (assento > numeroDeAssentosPorLado / 2) {
                assentoElement.classList.add('lateral');
            }

            const letraFileira = letrasFileira.charAt(linha);
            assentoElement.textContent = `${letraFileira}${assento}`;
            assentoElement.addEventListener('click', () => reservarAssento(assentoElement));
            assentosContainer.appendChild(assentoElement);
        }
    }
}

function reservarAssento(assentoElement) {
    assentoElement.classList.toggle('reservado');
}

criarAssentos();

//só vai prosseguir se escolher uma cadeira
function verificarAssentos() {
    const assentosReservados = document.querySelectorAll('.assento.reservado');

    if (assentosReservados.length > 0) {
        window.location.href = 'login.html';
    } else {
        alert('Escolha um assento para prosseguir.');
    }
}

//login
function validarLogin() {
    // Obter os valores dos campos de entrada
    const email = document.getElementById('inputEmail').value;
    const senha = document.getElementById('inputPassword').value;

    // Verificar se os campos estão preenchidos
    if (email.trim() === '' || senha.trim() === '') {
        alert('Preencha todos os campos.');
        return;
    }

    // Login padrão
    const emailPadrao = 'abc123@gmail.com';
    const senhaPadrao = 'Abc123';

    // Verificar se o email e a senha estão corretos
    if (email === emailPadrao && senha === senhaPadrao) {
        window.location.href = 'tipoIngresso.html';
    } else {
        alert('Email ou senha incorretos!');
    }
}

//validação tipo de ingresso
function confirmarCompra() {
    const quantidadeInteira = parseInt(document.getElementById('quantidadeInteira').value, 10);
    const quantidadeMeia = parseInt(document.getElementById('quantidadeMeia').value, 10);
    const quantidadeClienteIntercine = parseInt(document.getElementById('quantidadeClienteIntercine').value, 10);

    if (quantidadeInteira > 0 || quantidadeMeia > 0 || quantidadeClienteIntercine > 0) {
        window.location.href = 'pagamento.html';
    } else {
        alert('Escolha um tipo de ingresso para continuar.');
    }
}

// Calculo valor total pagina ingresso
function calcularTotal() {
    const quantidadeInteira = parseInt(document.getElementById('quantidadeInteira').value, 10) || 0;
    const quantidadeMeia = parseInt(document.getElementById('quantidadeMeia').value, 10) || 0;
    const quantidadeClienteIntercine = parseInt(document.getElementById('quantidadeClienteIntercine').value, 10) || 0;

    const precoInteira = 30;
    const precoMeia = 15;
    const precoClienteIntercine = 20;

    // Calcular o valor total para cada tipo de ingresso
    const totalInteira = quantidadeInteira * precoInteira;
    const totalMeia = quantidadeMeia * precoMeia;
    const totalClienteIntercine = quantidadeClienteIntercine * precoClienteIntercine;

    // Exibir o valor de cada tipo de ingresso
    document.getElementById('valorInteira').textContent = `Valor: R$ ${totalInteira.toFixed(2)}`;
    document.getElementById('valorMeia').textContent = `Valor: R$ ${totalMeia.toFixed(2)}`;
    document.getElementById('valorClienteIntercine').textContent = `Valor: R$ ${totalClienteIntercine.toFixed(2)}`;

    const valorTotal = totalInteira + totalMeia + totalClienteIntercine;
    document.getElementById('valorTotal').value = `R$ ${valorTotal.toFixed(2)}`;
}

document.getElementById('prosseguirBtn').addEventListener('click', confirmarCompra);

