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
                    <span>${sub.counter}</span>
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
    // 1. Pega o campo e o que foi digitado (Uma única vez)
    const campo = document.getElementById('busca-nome');
    if (!campo) return; // Segurança: se não achar o campo, para aqui.
    
    const termoBusca = campo.value.toLowerCase();

    // 2. Pega os ratings marcados
    const checks = document.querySelectorAll('.check-rating:checked');
    const ratingsSelecionados = Array.from(checks).map(cb => cb.value);

    // 3. A Peneira (Filter)
    const listaFiltrada = counters.filter(item => {
        const bateTexto = item.titulo.toLowerCase().includes(termoBusca);

        const temRatingNoSub = ratingsSelecionados.length === 0 || 
                               item.subtitulo.some(sub => ratingsSelecionados.includes(sub.rating.toString()));

        return bateTexto && temRatingNoSub;
    });

    // 4. Manda desenhar
    renderizar(listaFiltrada, ratingsSelecionados);
}


// Vigia do Texto (com o delay de 300ms que conversamos)
let timer;
document.getElementById('busca-nome').addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(filtrarTudo, 300);
});

// Vigia dos Checkboxes (clicou, filtrou!)
document.querySelectorAll('.check-rating').forEach(check => {
    check.addEventListener('change', filtrarTudo);
});


renderizar(counters);