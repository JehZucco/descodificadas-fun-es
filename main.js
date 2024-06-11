function calculaMedia(event){

    //impede que a página recarregue quando o formulário é enviado
    event.preventDefault();

    //recebe os inputs
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;
    var nota5 = document.getElementById("nota5").value;

    //transforma os inputs e números e trata campos vazios como 0
    nota1 = parseFloat(nota1) || 0;
    nota2 = parseFloat(nota2) || 0;
    nota3 = parseFloat(nota3) || 0;
    nota4 = parseFloat(nota4) || 0;
    nota5 = parseFloat(nota5) || 0;

    //calcula a média
    var media = (nota1 + nota2 + nota3 + nota4 + nota5)/5

    //mostra a média com 2 casas decimais
    document.getElementById("media").innerText = media.toFixed(2)
    document.getElementById("mostra_media").style.display = "block";
    
    // Exibe o botão "Nova Média"
    document.getElementById("novaMediaBtn").style.display = "block";

    //cor da média
    if(media >=7){
        document.getElementById("media").style.color = "green";
    }else{
        document.getElementById("media").style.color = "red";
    }
}

function limparCampos() {

    //atribui as variável dos inputs um valor vazio
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
    document.getElementById("nota5").value = "";

    //insere um valor vazio na média
    document.getElementById("media").innerText = "";

    //esconde o botão de nova média
    document.getElementById("novaMediaBtn").style.display = "none";
    //esconde a label média
    document.getElementById("mostra_media").style.display = "none";
}



