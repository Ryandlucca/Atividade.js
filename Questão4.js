//Questão 4-calculo de frete

function calcularFrete(peso) {
    if (peso <= 5) {
      return 20; 
    } else if (peso > 5 && peso <= 20) {
      return 50;
    } else {
      return 100; 
    }
  }
  
  
  const peso = 12;
  const valorFrete = calcularFrete(peso);
  
  console.log(valorFrete); 