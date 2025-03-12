const chat = document.getElementById('chat');

const tabelasNormal = {
    bludgeoning: [
        { resultado: "Perna Quebrada", descricao: "" },
        { resultado: "Braço Quebrado", descricao: "" },
        { resultado: "Costela Quebrada", descricao: "" },
        { resultado: "Hematoma Interno", descricao: "" },
        { resultado: "Desorientado", descricao: "" },
        { resultado: "Visão Borrada", descricao: "" },
        { resultado: "Amnésia Temporária", descricao: "" }
    ],
    piercing: [
        { resultado: "Músculo da Perna Rasgado", descricao: "" },
        { resultado: "Músculo do Braço Rasgado", descricao: "" },
        { resultado: "Órgão Rompido", descricao: "" },
        { resultado: "Hematoma Interno", descricao: "" },
        { resultado: "Pulmão Perfurado", descricao: "" }
    ],
    slashing: [
        { resultado: "Lesão Ocular", descricao: "" },
        { resultado: "Tendões Rompidos", descricao: "" },
        { resultado: "Hematoma Interno", descricao: "" },
        { resultado: "Pulmão Rasgado", descricao: "" },
        { resultado: "Cicatriz Parcial", descricao: "" }
    ],
    acid: [
        { resultado: "Ossos Expostos", descricao: "" },
        { resultado: "Cegueira Parcial", descricao: "" },
        { resultado: "Neuralgia", descricao: "" },
        { resultado: "Desfiguração Facial", descricao: "" },
        { resultado: "Pé Destruído", descricao: "" },
        { resultado: "Mão Destruída", descricao: "" },
        { resultado: "Bolhas na Pele", descricao: "" }
    ],
    cold: [
        { resultado: "Hipotermia", descricao: "" },
        { resultado: "Congelamento Parcial", descricao: "" },
        { resultado: "Choque Térmico", descricao: "" },
        { resultado: "Pé Congelado", descricao: "" },
        { resultado: "Mão Congelada", descricao: "" },
        { resultado: "Neuralgia", descricao: "" },
        { resultado: "Danos Celulares", descricao: "" }
    ]
};

const tabelasMaior = {
    bludgeoning: [
        { resultado: "Amnésia Permanente", descricao: "" },
        { resultado: "Perda de Braço / Mão", descricao: "" },
        { resultado: "Perda de Perna / Pé", descricao: "" },
        { resultado: "Hematoma Interno", descricao: "" },
        { resultado: "Perda de Olho", descricao: "" },
        { resultado: "Costela Quebrada", descricao: "" },
        { resultado: "Inconsciência Temporária", descricao: "" },
        { resultado: "Perda de Audição", descricao: "" }
    ],
    piercing: [
        { resultado: "Perda de Perna / Pé", descricao: "" },
        { resultado: "Perda de Braço / Mão", descricao: "" },
        { resultado: "Perda de Olho", descricao: "" },
        { resultado: "Sangramento Brutal", descricao: "" },
        { resultado: "Hematoma Interno", descricao: "" },
        { resultado: "Perda de Audição", descricao: "" },
        { resultado: "Perda de Dedos", descricao: "" },
        { resultado: "Desfiguração Facial", descricao: "" },
        { resultado: "Músculo Rasgado Braço / Perna", descricao: "" }
    ],
    slashing: [
        { resultado: "Perda de Dedos", descricao: "" },
        { resultado: "Desfiguração Horrível", descricao: "" },
        { resultado: "Perda de Perna / Pé", descricao: "" },
        { resultado: "Perda de Braço / Mão", descricao: "" },
        { resultado: "Perda de Olho", descricao: "" },
        { resultado: "Perda de Audição", descricao: "" },
        { resultado: "Sangramento Brutal", descricao: "" }
    ],

    acid: [
        { resultado: "Perda de Dedos", descricao: "" },
        { resultado: "Desfiguração Horrível", descricao: "" },
        { resultado: "Perda de Braço / Mão", descricao: "" },
        { resultado: "Perda de Perna / Pé", descricao: "" },
        { resultado: "Perda de Olho", descricao: "" },
        { resultado: "Órgãos Expostos", descricao: "" },
        { resultado: "Perda de Audição", descricao: "" }
    ],
    cold: [
        { resultado: "Congelamento Completo", descricao: "" },
        { resultado: "Perda de Audição", descricao: "" },
        { resultado: "Córneas Congeladas", descricao: "" },
        { resultado: "Cordas Vocais Congeladas", descricao: "" },
        { resultado: "Descarga Térmica", descricao: "" }
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
    const indice = Math.floor(Math.random() * tabela.length);
    return tabela[indice];
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