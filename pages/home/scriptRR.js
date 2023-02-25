const login = document.querySelector('.clear')

login.addEventListener('click',voltar);
login.addEventListener('touch',voltar);


function voltar(){
    window.location.href="./index.html"
}

function register(){
const senhaUM = document.querySelector("#password").value
const senhaDOIS = document.querySelector("#confirmPassword").value
const faltoudigito = document.querySelector("#password-min-length-error")
const senhasdiferentes = document.querySelector("#password-doesnt-match-error")


if (senhaUM.length < 6) {
faltoudigito.style.display = "block"
    
}
else if
(senhaUM == senhaDOIS){

    
}
else
{
    console.log("não foi")
    senhasdiferentes.style.display = "block"
}
}
