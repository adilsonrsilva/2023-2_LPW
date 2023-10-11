function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        var imc = peso / (altura * altura);
        var situacao = '';

        if (imc < 17) {
            situacao = 'Muito abaixo do peso';
        } else if (imc >= 17 && imc < 18.5) {
            situacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 26) {
            situacao = 'Peso normal';
        } else if (imc >= 26 && imc < 30) {
            situacao = 'Acima do peso';
        } else if (imc >= 30 && imc < 35) {
            situacao = 'Obesidade I';
        } else {
            situacao = 'Obesidade II ou superior';
        }

        document.getElementById('resultado').textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' - Situação: ' + situacao;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos para peso e altura.';
    }
}