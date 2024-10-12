//Questão 2 classificação de nota

function classificarNota(nota) {
    if (nota >= 70) {
      return "Aprovado";
    } else if (nota >= 50 && nota <= 69) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
  }
  
  // Exemplo de uso:
  const nota = 65;
  const classificacao = classificarNota(nota);
  
  console.log(classificacao); // Saída Esperada: "Recuperação"
  