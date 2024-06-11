function calcularMedia(){
    
    // Calcular a média aritmética
    var n1, n2, n3, n4, n5, media;
    
    // Obter os valores informados pelo usuário
    n1 = document.getElementById('nota_1').value;
    n2 = document.getElementById('nota_2').value;
    n3 = document.getElementById('nota_3').value;
    n4 = document.getElementById('nota_4').value;
    n5 = document.getElementById('nota_5').value;

    media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5

    // Exibir o resultado
    document.getElementById('media').innerHTML = media.toFixed(2)
}