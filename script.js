function iniciarHack() {
    const btn = document.getElementById('btn-start');
    const btnGame = document.getElementById('btn-game'); 
    const progressContainer = document.getElementById('progress-container');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const terminal = document.getElementById('terminal');
    const resultBox = document.getElementById('result-box');

    // Resetar e preparar interface
    btn.disabled = true;
    btn.innerText = "INJETANDO...";
    progressContainer.style.display = 'block';
    resultBox.style.display = 'none';
    btnGame.style.display = 'none'; 
    resultBox.innerHTML = '';
    terminal.innerHTML = '> Estabelecendo conexão com o servidor...<br>';
    
    let progresso = 0;
    let logIndex = 0;

    const logs = [
        "> Quebrando criptografia AES-256...",
        "> Localizando brecha no RNG do jogo...",
        "> Calculando probabilidade de ganho...",
        "> Extraindo algoritmo de distribuição...",
        "> Preparando pacote de interceptação..."
    ];

    const intervalo = setInterval(() => {
        progresso += Math.floor(Math.random() * 8) + 2; 
        if (progresso >= 100) {
            progresso = 100;
        }

        progressFill.style.width = progresso + '%';
        progressText.innerText = progresso + '%';

        if (progresso > (logIndex * 20) && logIndex < logs.length) {
            terminal.innerHTML += logs[logIndex] + '<br>';
            terminal.scrollTop = terminal.scrollHeight;
            logIndex++;
        }

        if (progresso === 100) {
            clearInterval(intervalo);
            setTimeout(() => {
                terminal.innerHTML += '> <span style="color:#fff">SINAL INTERCEPTADO COM SUCESSO!</span><br>';
                terminal.scrollTop = terminal.scrollHeight;
                mostrarResultado();
                
                btn.disabled = false;
                btn.innerText = "GERAR NOVO SINAL";
                progressContainer.style.display = 'none';
                progressFill.style.width = '0%';
                progressText.innerText = '0%';

                // Mostra o botão para ir para o jogo após a estratégia sair
                btnGame.style.display = 'block';
            }, 600);
        }
    }, 150);
}

function mostrarResultado() {
    const resultBox = document.getElementById('result-box');
    
    // Lista de valores de aposta atualizada
    const valoresAposta = ["0,40", "0,80", "1,20", "1,60", "2,00"];
    
    // Sorteia valores para cada tipo de giro
    const apostaNormal = valoresAposta[Math.floor(Math.random() * valoresAposta.length)];
    const apostaTurbo = valoresAposta[Math.floor(Math.random() * valoresAposta.length)];
    const apostaAuto = valoresAposta[Math.floor(Math.random() * valoresAposta.length)];
    
    // Sorteia a quantidade de giros
    const girosNormal = Math.floor(Math.random() * 4) + 1; 
    const girosTurbo = Math.floor(Math.random() * 4) + 1; 
    const girosAuto = [10, 30, 50][Math.floor(Math.random() * 3)]; 

    resultBox.innerHTML = `
        <div style="text-align: center; margin-bottom: 10px; color: #fff;">
            ⚠️ BRECHA ENCONTRADA ⚠️
        </div>
        - Gire <span>${girosNormal} vez(es)</span> modo <span>NORMAL</span> a <span>${apostaNormal}</span><br><br>
        - Gire <span>${girosTurbo} vez(es)</span> modo <span>TURBO</span> a <span>${apostaTurbo}</span><br><br>
        - Coloque a <span>R$ ${apostaAuto} ${girosAuto}x</span> no <span>AUTOMÁTICO MODO TURBO</span><br><br>
        <div style="text-align: center; font-size: 12px; margin-top: 10px;">
            Validade do padrão: 2 minutos
        </div>
    `;
    resultBox.style.display = 'block';
}

function irParaJogo() {
    // Redireciona diretamente para o link fornecido do jogo
    window.location.href = 'https://www.sol857.com/home/embedded?id=157509010';
}