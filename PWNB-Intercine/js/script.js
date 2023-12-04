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


