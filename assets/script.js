var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");
var mensagemAviso = document.querySelector("#mensagem-aviso");
var btnCriptografar = document.querySelector(".btn-criptografar");
var btnDescriptografar = document.querySelector(".btn-descriptografar");

function validarTexto(texto) {
  var textoSemAcento = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return /^[a-z\s]+$/.test(textoSemAcento);
}

textInput.addEventListener("input", function(){
  var texto = textInput.value;
  if(!validarTexto(texto)){
    mensagemAviso.style.display = "block";
    btnCriptografar.disabled = true;
    btnDescriptografar.disabled = true;
  } else{
    mensagemAviso.style.display = "none";
    btnCriptografar.disabled = false;
    btnDescriptografar.disabled = false;
  }
});

function criptografar() {
    var texto = textInput.value;

      var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultDescripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  var textoCop = document.getElementById('output-texto');

  textoCop.select();
  document.execCommand('copy');
  alert("Texto copiado.");
}  
