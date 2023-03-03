//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());

//TODO: Print no console se a semente deve ser plantada ou se o buraco deve
//avançar ou retroceder X metros
diferenca = id - 10;
if (diferenca === 0)
  print('Plantar!');
else if (diferenca > 0)
  print(`O buraco deve retroceder ${diferenca} metros`);
else
  print(`O buraco deve avançar ${Math.abs(diferenca)} metros`);
