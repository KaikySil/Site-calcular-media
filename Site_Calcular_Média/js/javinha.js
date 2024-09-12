function media(){
    var nome = document.getElementById("nome").value;

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);
    var media = (n1 + n2 + n3) / 3;

    if (media >= 7){
        var resultado = "Aprovado!";
    }
    else if(media == 5 || media == 6){
        var resultado = "Exame!";
    }
    else{
        var resultado = "Reprovado!";
    }
    media = media.toFixed(1);

    txtmedia.value = (`Aluno: ${nome}, Média: ${media}, Situação: ${resultado}`);
}