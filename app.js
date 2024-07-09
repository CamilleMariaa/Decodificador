let imagem = document.getElementById("procurando_mensagem_imagem")
let texto = document.getElementById("procurando_mensagem_texto")


function criptografar() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
    imagem.style.display = "none"
    texto.style.display = "none"
}

function descriptografar() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
    imagem.style.display = "none"
    texto.style.display = "none"
}

function copiarTexto() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência");
}


