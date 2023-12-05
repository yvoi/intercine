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
        alert('Escolha pelo um assento para prosseguir.');
    }
}

//login
function validarLogin() {
    // Obter os valores dos campos de entrada
    const email = document.getElementById('inputEmail').value;
    const senha = document.getElementById('inputPassword').value;

    // Validar e-mail
    if (!email.includes('@')) {
        alert('E-mail inválido');
        return;
    }

    // Validar senha
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!senhaRegex.test(senha)) {
        alert('A senha deve conter pelo menos 6 caracteres, incluindo maiúsculas, minúsculas e números.');
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

