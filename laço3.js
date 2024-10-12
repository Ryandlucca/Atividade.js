// laço3
function somaNumeros(n) {
    let soma = 0;
    let i = 1;
    
    while (i <= n) {
      soma += i;
      i++;
    }
  
    return soma;
  }
  
 
  const n = 4;
  const resultado = somaNumeros(n);
  
  console.log(resultado); 