//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let plastico = parseInt(gets());
let diasNecessarios = 0;

//TODO: Print no console a quantidade de dias que levará para que o plástico chegue
//a 1kg ou menos

/* 
  Dado que a massa inicial, m, é dividida por 2 a cada dia, a massa final após x dias,
  f, é dada por f = m/2^x. Isolando o x e substituindo f por 1, obtemos x = log_2(m).
  Após o cálculo, como x é um número inteiro, precisamos arredondar para cima. 
  Por exemplo, para uma massa inicial de 10 kg, x = log_2(10) = 3.32 (aproximadamente);
  portanto, 4 dias são necessários.
*/

diasNecessarios = Math.ceil(Math.log2(plastico));
print(`Serão necessários ${diasNecessarios} dias`);
