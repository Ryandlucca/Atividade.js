//Questão 5- clasificação de temperatura
function classificarTemperatura(temperatura) {
    if (temperatura < 15) {
      return "Frio";
    } else if (temperatura >= 15 && temperatura <= 25) {
      return "Agradável";
    } else {
      return "Quente";
    }
  }

  const temperatura = 22;
  const classificacao = classificarTemperatura(temperatura);
  
console.log(classificacao); 