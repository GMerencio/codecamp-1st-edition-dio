//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const arr = gets().split(', ')
let qualFiltro = 0;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas na entrada
let tamanhosMoleculas = arr.map(molecula => molecula.length);
let maiorTamanho = Math.max(...tamanhosMoleculas);

if (maiorTamanho > 10)
  qualFiltro = 'Filtro Duplo Específico';
else if (maiorTamanho > 5)
  qualFiltro = 'Filtro Específico';
else
  qualFiltro = 'Filtro Normal';
  
print(`O filtro deve ser: ${qualFiltro}`);
