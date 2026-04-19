function renderizar(dados, ratingsSelecionados = []) {

    // Pega a DIV do seu HTML
    const container = document.getElementById('lista-counters');

    container.innerHTML = '';

    // Percorre o objeto 'counters' que o VBA gerou
    dados.forEach(item => {
        
        // 1. Cria o container do Card
        const card = document.createElement('div');
        card.className = "card-time";

        // 2. Cria o Botão do Título
        const btn = document.createElement('button');
        btn.innerHTML = `${item.titulo} <span style="float:right">▼</span>`;
        btn.className = "botao-titulo";

        // 3. Cria a DIV que vai esconder/mostrar os subtitulos
        const listaOculta = document.createElement('div');
        listaOculta.className = "lista-oculta";

        // 4. Preenche a lista oculta com os subtitulos
        item.subtitulo.forEach(sub => {

            // --- NOVA TRAVA DE SEGURANÇA ---
            // Se a lista de filtros estiver vazia OU o rating do item estiver na lista...
            const deveMostrar = ratingsSelecionados.length === 0 || 
                        ratingsSelecionados.includes(sub.rating.toString());

            if (deveMostrar) {
                // Todo o seu código original continua aqui dentro:
                const linha = document.createElement('div');
                linha.className = "linha-counter";            
            
                // Lógica das cores e triângulos (Simplificada como você pediu)
                let cor = "#FFC107"; // Mostarda (neutro)
                if (sub.rating > 0) cor = "#16A085"; // Verde
                if (sub.rating < 0) cor = "#FF0000"; // Vermelho

                // 1. Definimos qual é o caractere da vez
                let icone = sub.rating > 0 ? "▲" : "▼";

                // 2. Aplicamos a lógica final (Repetir se não for zero, se for zero mostra a bolinha)
                const simbolos = sub.rating !== 0 ? icone.repeat(Math.abs(sub.rating)) : "⦿";

                linha.innerHTML = `
                    <span class="${sub.observacao}"
                    onclick="abrirModal('${item.titulo}', '${sub.counter}')">
                    ${sub.counter}</span>
                    <span style="color: ${cor}">${simbolos}</span>
                `;
                listaOculta.appendChild(linha);
            }

        });

        btn.onclick = () => {
        // Alterna a classe 'visivel' (se tem, tira; se não tem, coloca)
        listaOculta.classList.toggle('visivel');
        
        // Verifica se ficou visível para trocar o triângulo
        const estaAberto = listaOculta.classList.contains('visivel');
        btn.querySelector('span').textContent = estaAberto ? "▲" : "▼";
    };

        // Monta a estrutura final
        card.appendChild(btn);
        card.appendChild(listaOculta);
        container.appendChild(card);
    });

}

function filtrarTudo() {
    const campoNome = document.getElementById('busca-nome');
    const campoAtk = document.getElementById('busca-nomeAtk');
    
    const termoNome = campoNome.value.toLowerCase();
    const termoAtk = campoAtk.value.toLowerCase();

    const checks = document.querySelectorAll('.check-rating:checked');
    const ratingsSelecionados = Array.from(checks).map(cb => cb.value);

    let listaFiltrada = [];

    // --- PESQUISA 1: Por Título (Defesas) ---
    if (termoNome !== "" && termoAtk === "") {
        listaFiltrada = counters.filter(item => {
            const bateTitulo = item.titulo.toLowerCase().includes(termoNome);
            const temRating = ratingsSelecionados.length === 0 || 
                              item.subtitulo.some(sub => ratingsSelecionados.includes(sub.rating.toString()));
            return bateTitulo && temRating;
        });
    } 
    // --- PESQUISA 2: Por Counter (Atacantes) ---
    else if (termoAtk !== "" && termoNome === "") {
    listaFiltrada = counters
        .map(item => {
            const subtitulosFiltrados = item.subtitulo.filter(sub => {
                const bateTextoSub = sub.counter.toLowerCase().includes(termoAtk);
                const bateRatingSub = ratingsSelecionados.length === 0 || 
                                      ratingsSelecionados.includes(sub.rating.toString());
                return bateTextoSub && bateRatingSub;
            });

            if (subtitulosFiltrados.length > 0) {
                return {
                    ...item,
                    subtitulo: subtitulosFiltrados
                };
            }
        })
        .filter(Boolean);
    }
    // --- SEM PESQUISA DE TEXTO: Filtra só pelos Ratings ---
    else {
        listaFiltrada = counters.filter(item => {
            return ratingsSelecionados.length === 0 || 
                   item.subtitulo.some(sub => ratingsSelecionados.includes(sub.rating.toString()));
        });
    }

    renderizar(listaFiltrada, ratingsSelecionados);
}


// Vigia do Texto (com o delay de 300ms que conversamos)
let timer;
document.getElementById('busca-nome').addEventListener('input', () => {
    const buscaAtk = document.getElementById('busca-nomeAtk');
    clearTimeout(timer);
    buscaAtk.value = '';
    timer = setTimeout(filtrarTudo, 300);
});

document.getElementById('busca-nomeAtk').addEventListener('input', () => {
    const buscaDef = document.getElementById('busca-nome');
    clearTimeout(timer);
    buscaDef.value = '';
    timer = setTimeout(filtrarTudo, 300);
});

// Vigia dos Checkboxes (clicou, filtrou!)
document.querySelectorAll('.check-rating').forEach(check => {
    check.addEventListener('change', filtrarTudo);
});

// LIMPAR INPUTs
const limpar = document.getElementById('btn-limpar');
const campoBusca = document.getElementById('busca-nome');

const limparAtk = document.getElementById('btn-limparAtk');
const campoBuscaAtk = document.getElementById('busca-nomeAtk');

limpar.addEventListener('click', () => {
    campoBuscaAtk.value = "";
    campoBusca.value = "";
    campoBusca.focus();

    filtrarTudo();

});

limparAtk.addEventListener('click', () => {
    campoBusca.value = "";
    campoBuscaAtk.value = "";
    campoBuscaAtk.focus();

    filtrarTudo();

});

// FIM Limpar Inputs


renderizar(counters); //IMPORTANTE


function abrirModal(titulo, sub) {
    
    const modal = document.getElementById("obsModal");
    const campoAdversario = document.getElementById("modal-adversario");
    const campoTitulo = document.getElementById("modal-titulo");
    const campoObs = document.getElementById("modal-obs");

    if (!dicionario[titulo] || !dicionario[titulo][sub]) {
        return;
    }

    campoAdversario.innerText = titulo;
    campoTitulo.innerText = sub;
    campoObs.innerText = dicionario[titulo][sub];
    
    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById("obsModal").style.display = "none";
}
