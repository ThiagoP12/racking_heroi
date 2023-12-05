
let saldoVitoria = prompt("Quantidade de vitórias: ");
let nivel = "";

function resultadoJogador(vitoria) {
    if (vitoria < 10) {
        nivel = "Ferro";
    } else if (vitoria >= 11 && vitoria <= 20) {
        nivel = "Bronze";
    } else if (vitoria >= 21 && vitoria <= 50) {
        nivel = "Prata";
    } else if (vitoria >= 51 && vitoria <= 80) {
        nivel = "Ouro";
    } else if (vitoria >= 81 && vitoria <= 90) {
        nivel = "Diamante";
    } else if (vitoria >= 91 && vitoria <= 100) {
        nivel = "Lendário";
    } else if (vitoria >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Nível não definido";
    }

    return nivel;
}


let resultado = resultadoJogador(saldoVitoria, 10);


alert("O nível é : " + resultado);