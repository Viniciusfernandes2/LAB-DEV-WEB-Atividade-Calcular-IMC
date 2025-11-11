// Função que classifica o IMC e retorna texto e cor
export function classificarIMC(imc: number) {
  if (imc < 18.5) return { classificacao: 'Abaixo do Peso', cor: '#F4D03F' };
  if (imc < 25) return { classificacao: 'Peso Normal', cor: 'green' };
  if (imc < 30) return { classificacao: 'Sobrepeso', cor: '#F39C12' };
  if (imc < 35) return { classificacao: 'Obesidade Grau I', cor: '#E67E22' };
  if (imc < 40) return { classificacao: 'Obesidade Grau II (Severa)', cor: 'red' };
  return { classificacao: 'Obesidade Grau III (Mórbida)', cor: '#7B241C' };
}

// Função que calcula o IMC
export function calcularIMC(peso: string, altura: string) {
  const pesoNum = parseFloat(peso.replace(',', '.'));
  let alturaNum = parseFloat(altura.replace(',', '.'));

  if (!peso || !altura || isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
    return null;
  }

  // Se altura for > 10, assumimos que foi digitado em cm, convertemos para metros
  if (alturaNum > 10) alturaNum = alturaNum / 100;

  return pesoNum / (alturaNum * alturaNum);
}



  