function MostraNome(){
            
    let nome = document.getElementById("nome1").value;
    let meio = document.getElementById("nome2").value;
    let sobrenome = document.getElementById("nome3").value;
    resultado = document.getElementById("resultado");

    resultado.innerText = "O nome completo da pessoa é: " + nome + " " + meio + " " + sobrenome;
    
}