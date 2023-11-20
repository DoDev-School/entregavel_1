///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!

function Calculadora(numero1, numero2, operacao){
  let resultado = 0;
  switch (operacao) {
    case '+':
      resultado = Number(numero1) + Number(numero2)
      break;
    
    case '-':
      resultado = Number(numero1) - Number(numero2)
      break;
    
    case '*':
      resultado = Number(numero1) * Number(numero2)
      break;
    
    case '/':
      resultado = Number(numero1) / Number(numero2)
      break;
    case 'e':
      resultado = 1;
      for(let contador = 0; contador < Number(numero2); contador++ ){
        resultado *= Number(numero1) 
      }
    default:
      break;
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
  if( visor.value === undefined || visor.value > 1000000){
    visor.value = 'ERRO'
  }
}

