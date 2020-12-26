
numeroAleatorio1= Math.floor(Math.random() * 10) + 1
numeroAleatorio2= Math.floor(Math.random() * 10) + 1
soma = parseInt(numeroAleatorio1) + parseInt(numeroAleatorio2)

campo1 = document.getElementById("numero1").value = numeroAleatorio1
campo2 = document.getElementById("numero2").value = numeroAleatorio2


function envia(){ 
    inputResposta = document.getElementById("resultado").value

    if(inputResposta == soma){
        document.getElementById("acertou").style.display = "block"
        document.getElementById("errou").style.display = "none"
        
    }
    else{
        document.getElementById("errou").style.display = "block"
        document.getElementById("acertou").style.display = "none"
    }

}
