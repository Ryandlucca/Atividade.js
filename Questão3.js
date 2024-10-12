//questão 3- Verificar idade 
function verificarIdade(idade) {
    if (idade < 18) {
      return "Menor de idade";
    } else if (idade >= 18 && idade <= 64) {
      return "Maior de idade";
    } else {
      return "Idoso";
    }
  }
  
  const idade = 20;
  const resultado = verificarIdade(idade);
  
  console.log(resultado); 