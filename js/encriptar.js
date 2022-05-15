let btn_encriptar = document.querySelector(".encriptar");
let btn_desencriptar = document.querySelector(".desencriptar");
let btn_copiar = document.querySelector(".boton");
    
let texto_encriptar = document.querySelector("#mensaje");
let texto_desencriptar = document.querySelector("#text-encriptar");

btn_encriptar.addEventListener("click", function () {

    let textoEncriptado = encriptar(texto_encriptar.value);
    texto_desencriptar.value = textoEncriptado;
});

btn_desencriptar.addEventListener("click", function () {

    let textoEncriptado = desencriptar(texto_encriptar.value);
    texto_desencriptar.value = textoEncriptado;
});

btn_copiar.addEventListener("click",  function(){
    
    console.log(texto_encriptar.value);
    console.log(texto_desencriptar.value);
    texto_encriptar.value = texto_desencriptar.value;
    texto_desencriptar.value = "";


});

function encriptar(StringEncriptar){
    let textEncrp =[["e","enter"],["i","items"],["a","ai"],["o","ober"],["u","ufat"]];

    StringEncriptar = StringEncriptar.toLowerCase();

    for (let i = 0; i < textEncrp.length; i++) {
        if(StringEncriptar.includes(textEncrp[i][0])){
        StringEncriptar = StringEncriptar.replaceAll(textEncrp[i][0],textEncrp[i][1])
    }
}
return StringEncriptar;
}

function desencriptar(StringDesencriptar){
    let textEncrp =[["enter","e"],["items","i"],["ai","a"],["ober","o"],["ufat","u"]];

    StringDesencriptar = StringDesencriptar.toLowerCase();

    for (let i = 0; i < textEncrp.length; i++) {
        if(StringDesencriptar.includes(textEncrp[i][0])){
        StringDesencriptar = StringDesencriptar.replaceAll(textEncrp[i][0],textEncrp[i][1])
    }
}
return StringDesencriptar;
}

