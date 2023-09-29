///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
let resultado;
function Calculadora(n1,n2,op){
  switch (op) {
    case '+':
      resultado = (+n1)+(+n2);
      break;
    case '-':
      resultado = (+n1)-(+n2)
      break;
    case '*':
      resultado = (+n1)*(+n2)
      break;
    case '/':
      resultado = (+n1)/(+n2)
      break;
    case 'e':
      resultado = (+n1) ** (+n2);;
      break;
  }
  if (resultado === undefined || resultado === 1000000){
    resultado = "Erro"
  }
  return resultado;
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}