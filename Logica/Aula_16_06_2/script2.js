let primeiro;
let segundo;
let terceiro;
let sinal;

function enviasete(){
    document.getElementById("visor").value += "7"
}

function enviaOito(){
    document.getElementById("visor").value += "8"
}

function enviaNove(){
    document.getElementById("visor").value += "9"
}

function enviaQuatro(){
    document.getElementById("visor").value += "4"
}

function enviaCinco(){
    document.getElementById("visor").value += "5"
}

function enviaSeis(){
    document.getElementById("visor").value += "6"
}

function enviaUm(){
    document.getElementById("visor").value += "1"
}

function enviaDois(){
    document.getElementById("visor").value += "2"
}

function enviaTres(){
    document.getElementById("visor").value += "3"
}

function enviaZero(){
    document.getElementById("visor").value += "0"
}
function atualizavisor(){
    primeiro = document.getElementById("visor").value
    document.getElementById("visor").value = ''
}

function adicao(){
    atualizavisor()    
    sinal = "+"
}

function igual(){
   segundo = document.getElementById("visor").value
   if(sinal == '+'){
    resultado = parseInt(primeiro) + parseInt(segundo)
   }
   if(sinal == '-'){
    resultado = parseInt(primeiro) - parseInt(segundo)
   }
   if(sinal == '*'){
    resultado = parseInt(primeiro) * parseInt(segundo)
   }
   if(sinal == '/'){
    resultado = parseInt(primeiro) / parseInt(segundo)
   }
   if(sinal == 'r'){
    resultado = Math.sqrt(parseInt(primeiro))
   }
   if(sinal == 'x²'){
    resultado = (parseInt(primeiro)) ** (parseInt(segundo))
   }
   document.getElementById("visor").value = resultado   
}

function subtracao(){
    atualizavisor()   
    sinal = "-"
}
function vezes(){
    atualizavisor()   
    sinal = "*"
}
function divisao(){
    atualizavisor()   
    sinal = "/"
}
function raiz(){
    atualizavisor()   
    sinal = "r"
    igual()
}
function potência(){
    atualizavisor()   
    sinal = "x²"
}
function apagar(){
    document.getElementById("visor").value = ''
    primeiro = ''
    segundo = '' 
}

