function calcularImovel(m2, quartos) {
  let valorMetro = m2 * 3000;
  if (quartos >= 3) {
    valorMetro *= 1.5;
  } else if (quartos == 2) {
    valorMetro *= 1.2;
  } else {
    return valorMetro;
  }
  return valorMetro;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$${preco}`);
