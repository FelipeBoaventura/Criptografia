/*  tratamento de Criptografia */
function criptografaTexto() {

    let textoCapturado = document.querySelector('input').value;
   /*fatia cada letra para tratar as strings*/
    let arrayTexto = textoCapturado.split('');
    let textoCriptografado;

    for (var i = 0; i < arrayTexto.length; i++) {

        if (arrayTexto[i] == 'a') {
            arrayTexto[i] = 'yqya'
        }
        if (arrayTexto[i] == 'e') {
            arrayTexto[i] = 'loleleol'
        }
        if (arrayTexto[i] == 'i') {
            arrayTexto[i] = 'plof'
        }
        if (arrayTexto[i] == 'o') {
            arrayTexto[i] = 'jacare'
        }
        if (arrayTexto[i] == 'u') {
            arrayTexto[i] = 'ypaso'
        }
    }

    textoCriptografado = arrayTexto.join('');
   

    let exibeCripto = document.getElementById('msg');
    //console.log(exibeCripto)
    exibeCripto.value = textoCriptografado;
}

/*botão de criptografia */
var btnCripto = document.querySelector('button');

btnCripto.addEventListener('click', function (e) {
    e.preventDefault();

    criptografaTexto();
})

/* Descriptografia */
function converteTexto(textoCapturado){
    
    return textoCapturado.replaceAll('yqya','a').replaceAll('loleleol','e').replaceAll('plof','i').replaceAll('jacare','o').replaceAll('ypaso','u');
/*
   return textoCapturado.replace(/ai/g,'a').replace(/enter/g,'e').replace(/ims/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');*/  
    
}

/* Botão de descriptografia*/
var btnDescripografar = document.getElementById('btn-descripto');

btnDescripografar.addEventListener('click', function(e){
    e.preventDefault();

    let textoCapturado = document.getElementById('input-texto').value;
    
    let exibeDesCripto = document.getElementById('msg');
    
    exibeDesCripto.value = converteTexto(textoCapturado);
})

/*Botão de copiar o texto*/
var btnCopy = document.getElementById('copiar');

btnCopy.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('msg').select();
    document.execCommand('copy');
})