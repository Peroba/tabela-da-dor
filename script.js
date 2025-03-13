const chat = document.getElementById('chat');

const tabelasNormal = {
    bludgeoning: [
        { resultado: "Perna Quebrada", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Braço Quebrado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Costela Quebrada", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Hematoma Interno", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desorientado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Visão Borrada", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Amnésia Temporária", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    piercing: [
        { resultado: "Músculo da Perna Rasgado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Músculo do Braço Rasgado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Órgão Rompido", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Hematoma Interno", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Pulmão Perfurado", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    slashing: [
        { resultado: "Lesão Ocular", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Tendões Rompidos", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Hematoma Interno", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Pulmão Rasgado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Cicatriz Parcial", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    acid: [
        { resultado: "Ossos Expostos", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Cegueira Parcial", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Neuralgia", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desfiguração Facial", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Pé Destruído", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Mão Destruída", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Bolhas na Pele", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    cold: [
        { resultado: "Hipotermia", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Congelamento Parcial", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Pé Congelado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Mão Congelada", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Neuralgia", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Danos Celulares", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    fire: [
        { resultado: "Insolação", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Queimadura de Primeiro Grau", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Queimadura de Segundo Grau", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Neuralgia", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Bolhas", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    force: [
        { resultado: "Vulnerabilidade Mágica", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Doença Arcana", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Cegueira para o Mundano", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desorientado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desordem Interna", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    lightning: [
        { resultado: "Fibrilação", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Espasmos Musculares", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Queimadura Parcial", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Lesão Cerebral", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Queimação Elétrica", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Lesão Cardíaca", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    necrotic: [
        { resultado: "Perda de Sangue Menor", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Mão Podre", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Pé Podre", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Músculos Podres", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Envelhecimento Prematuro", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    poison: [
        { resultado: "Náusea", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Vertigem", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Dano Sistêmico", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Lesão Cardíaca", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    psychic: [
        { resultado: "Loucura de Curto Prazo", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Enxaqueca", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Volume Impróprio", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Lesão Cerebral", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Amnésia Temporária", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Danos Cerebrais Menores", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    radiant: [
        { resultado: "Cegueira Parcial", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Doença de Radiação", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Queimação Radiante", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Bolhas", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    thunder: [
        { resultado: "Enxaqueca", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Vertigem", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Surdez Parcial", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Lesão Cerebral", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desorientado", descricao: "Paulo dá a bunda", peso: 1 }
    ]
};

const tabelasMaior = {
    bludgeoning: [
        { resultado: "Amnésia Permanente", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Braço / Mão", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Perna / Pé", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Hematoma Interno", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Olho", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Costela Quebrada", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Inconsciência Temporária", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Audição", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    piercing: [
        { resultado: "Perda de Perna / Pé", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Braço / Mão", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Olho", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Sangramento Brutal", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Hematoma Interno", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Audição", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Dedos", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desfiguração Facial", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Músculo Rasgado Braço / Perna", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    slashing: [
        { resultado: "Perda de Dedos", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desfiguração Horrível", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Perna / Pé", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Braço / Mão", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Olho", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Audição", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Sangramento Brutal", descricao: "Paulo dá a bunda", peso: 1 }
    ],

    acid: [
        { resultado: "Perda de Dedos", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desfiguração Horrível", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Braço / Mão", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Perna / Pé", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Olho", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Órgãos Expostos", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Audição", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    cold: [
        { resultado: "Congelamento Completo", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Audição", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Córneas Congeladas", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Cordas Vocais Congeladas", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Descarga Térmica", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    fire: [
        { resultado: "Perda de Braço / Mão", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Perna / Pé", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Olho", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Queimadura de Terceiro Grau", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Queimadura de Quarto Grau", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desfiguração Horrível", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    force: [
        { resultado: "Rasgo de Alma", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Banimento", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Magia Selvagem", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Deficiência Arcana", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Colapso Corporal", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    lightning: [
        { resultado: "Sistema Nervoso Destruído", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Parada Cardíaca", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Lesão Cardíaca", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desfiguração Horrível", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Braço / Mão", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Perna / Pé", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    necrotic: [
        { resultado: "Carne em Decadência", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Braço / Mão", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Perna / Pé", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Grande Perda de Sangue", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Envelhecimento Descontrolado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Necrose de Órgãos", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desfiguração Horrível", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    poison: [
        { resultado: "Parada Cardíaca", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Dano Grave no Fígado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Insuficiência Renal Grave", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Lesão Cardíaca Grave", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    psychic: [
        { resultado: "Loucura Indefinida", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Loucura de Longo Prazo", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Fobia", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Amnésia Permanente", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Olfato", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Audição", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Apagão Cerebral", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Visão", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    radiant: [
        { resultado: "Câncer", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Mudança de Alinhamento", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Desfiguração Horrível", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Amaldiçoado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Queda de Cabelo", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Cegueira", descricao: "Paulo dá a bunda", peso: 1 }
    ],
    thunder: [
        { resultado: "Surdez", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Perda de Olho", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Hematoma Interno", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Pulmão Colapsado", descricao: "Paulo dá a bunda", peso: 1 },
        { resultado: "Ossos Esmigalhados", descricao: "Paulo dá a bunda", peso: 1 }
    ]
};

function alternarCheckbox(checkbox) {
    const tabelaDor = document.querySelectorAll('.tabela-dor');
    const tabelaDorMaior = document.querySelectorAll('.tabela-dor-maior');

    if (checkbox.classList.contains('tabela-dor') && checkbox.checked) {
        tabelaDorMaior.forEach(cb => cb.checked = false);
    } else if (checkbox.classList.contains('tabela-dor-maior') && checkbox.checked) {
        tabelaDor.forEach(cb => cb.checked = false);
    }
}

function sincronizarCheckboxes() {
    const checkboxesNormal = document.querySelectorAll('.tabela-dor');
    const checkboxesMaior = document.querySelectorAll('.tabela-dor-maior');

    checkboxesNormal.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkboxesNormal.forEach(cb => cb.checked = true);
                checkboxesMaior.forEach(cb => cb.checked = false);
            }
        });
    });

    checkboxesMaior.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkboxesMaior.forEach(cb => cb.checked = true);
                checkboxesNormal.forEach(cb => cb.checked = false);
            }
        });
    });
}

sincronizarCheckboxes();

function sortearResultado(tabela) {
    // Calcula o peso total da tabela
    const pesoTotal = tabela.reduce((acc, item) => acc + item.peso, 0);

    // Gera um número aleatório entre 0 e o peso total
    const random = Math.random() * pesoTotal;

    // Encontra o item correspondente ao número aleatório
    let acumulado = 0;
    for (const item of tabela) {
        acumulado += item.peso;
        if (random < acumulado) {
            return item;
        }
    }
}

function adicionarRegistro(tipo, resultado, descricao) {
    const linha = document.createElement('div');
    const tabelaDor = document.querySelector('.tabela-dor:checked') !== null;
    const tabelaDorMaior = document.querySelector('.tabela-dor-maior:checked') !== null;

    if (tabelaDor) {
        linha.className = 'dor';
    } else if (tabelaDorMaior) {
        linha.className = 'dor-maior';
    }

    const linhaSuperior = document.createElement('div');
    linhaSuperior.className = 'linha-superior';

    const texto = document.createElement('span');
    texto.textContent = `${tipo}: ${resultado}`;
    linhaSuperior.appendChild(texto);

    const dropdownButton = document.createElement('button');
    dropdownButton.className = 'dropdown-button';
    dropdownButton.innerHTML = '<i class="fas fa-chevron-down"></i>';
    dropdownButton.addEventListener('click', function (event) {
        event.stopPropagation();
        const descricaoDiv = linha.querySelector('.descricao');
        descricaoDiv.style.display = descricaoDiv.style.display === 'block' ? 'none' : 'block';
    });
    linhaSuperior.appendChild(dropdownButton);

    linha.appendChild(linhaSuperior);

    const descricaoDiv = document.createElement('div');
    descricaoDiv.className = 'descricao';
    descricaoDiv.textContent = descricao;
    descricaoDiv.style.display = 'none';
    linha.appendChild(descricaoDiv);

    linha.addEventListener('click', function () {
        const descricaoDiv = linha.querySelector('.descricao');
        descricaoDiv.style.display = descricaoDiv.style.display === 'block' ? 'none' : 'block';
    });

    chat.appendChild(linha);
    chat.scrollTop = chat.scrollHeight;
}

function gerarResultado() {
    const selecao = document.getElementById('selecao-tabela').value;
    const tabelaDorMaior = document.querySelector('.tabela-dor-maior:checked') !== null;

    const tabela = tabelaDorMaior ? tabelasMaior[selecao] : tabelasNormal[selecao];

    const { resultado, descricao } = sortearResultado(tabela);
    adicionarRegistro(selecao.charAt(0).toUpperCase() + selecao.slice(1), resultado, descricao);
}
