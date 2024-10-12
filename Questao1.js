// Questão1-descontodecompra
function calcularDesconto(preco, tipoCliente) {
    if (tipoCliente === "membro") {
      return preco * 0.9; 
    }
    return preco; 
  }
  
  // Exemplo de uso:
  const preco = 100;
  const tipoCliente = "membro";
  const precoFinal = calcularDesconto(preco, tipoCliente);
  console.log(precoFinal);
  