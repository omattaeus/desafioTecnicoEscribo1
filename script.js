const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNumber(number) {
  let sum = 0;

  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// Receber um valor do usuário
rl.question('Digite um número inteiro positivo: ', (number_user) => {
    number_user = parseInt(number_user);

  // Verificar se o valor é um número positivo
  if (!isNaN(number_user) && number_user > 0) {
    // Calcular o somatório e exibir o resultado
    const result = getNumber(number_user);
    console.log(`O somatório dos números divisíveis por 3 ou 5 menores que ${number_user} é ${result}`);
  } else {
    console.log("Por favor, digite um número inteiro positivo válido.");
  }

  rl.close();
});