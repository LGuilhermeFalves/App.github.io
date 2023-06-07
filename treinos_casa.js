document.addEventListener("DOMContentLoaded", function(event) {
    botao_1 = document.querySelector(".treino_biceps");
    botao_2 = document.querySelector(".treino_panturrilha");
    botao_3 = document.querySelector('.treino_abdomen');
    botao_4 = document.querySelector('.treino_peito');

    botao_1.addEventListener("click", function(event) {
        localStorage.setItem("titulo", "Treino Biceps");
        localStorage.setItem("exercicio_1", "Rosca Direta");
        localStorage.setItem("exercicio_2", "Rosca Alternada");
        localStorage.setItem("exercicio_3", "Rosca Martelo");
        localStorage.setItem("exercicio_4", "Rosca Concentrada");
        
        localStorage.setItem('equipamento_1', 'Barra Reta');
        localStorage.setItem('equipamento_2', 'Barra W');
        localStorage.setItem('equipamento_3', 'Halteres');
        localStorage.setItem('equipamento_4', 'Máquina Rosca Direta');
    });

    botao_2.addEventListener("click", function(event) {
        localStorage.setItem("titulo", "Treino Panturrilha");
        localStorage.setItem("exercicio_1", "Panturrilha Sentado");
        localStorage.setItem("exercicio_2", "Panturrilha Em Pé");
        localStorage.setItem("exercicio_3", "Panturrilha Unilateral");
        localStorage.setItem("exercicio_4", "Panturrilha Em Pé Unilateral");

        localStorage.setItem('equipamento_1', 'Máquina Panturrilha Sentado');
        localStorage.setItem('equipamento_2', 'Máquina Panturrilha Em Pé');
        localStorage.setItem('equipamento_3', 'Máquina Panturrilha Unilateral');
        localStorage.setItem('equipamento_4', 'Máquina Panturrilha Em Pé Unilateral');
    });

    botao_3.addEventListener("click", function(event) {
        localStorage.setItem("titulo", "Treino Abdomen");
        localStorage.setItem("exercicio_1", "Abdominal Supra");
        localStorage.setItem("exercicio_2", "Abdominal Infra");
        localStorage.setItem("exercicio_3", "Abdominal Lateral");
        localStorage.setItem("exercicio_4", "Abdominal Inverso");

        localStorage.setItem('equipamento_1', 'Banco Declinado');
        localStorage.setItem('equipamento_2', 'Banco Supino Regulável');
        localStorage.setItem('equipamento_3', 'Roda Abdominal');
        localStorage.setItem('equipamento_4', 'Plataforma Abdominal');
    });

    botao_4.addEventListener("click", function(event) {
        localStorage.setItem("titulo", "Treino Peito");
        localStorage.setItem("exercicio_1", "Supino Reto");
        localStorage.setItem("exercicio_2", "Supino Inclinado");
        localStorage.setItem("exercicio_3", "Supino Declinado");
        localStorage.setItem("exercicio_4", "Supino Unilateral");

        localStorage.setItem('equipamento_1', 'Banco Reto');
        localStorage.setItem('equipamento_2', 'Banco Inclinado');
        localStorage.setItem('equipamento_3', 'Banco Declinado');
        localStorage.setItem('equipamento_4', 'Banco Reto');
    });
});
