//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let lista1 = gets().split(', ');
let lista2 = gets().split(', ');
let lista3 = gets().split(', ')

let arr = [lista1, lista2, lista3]

let qualFiltro = false;
let qualMolecula;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas prejudiciais
//avaliadas no teste.

// Buscas em Sets são, em média, mais rápidas do que buscas em Arrays. Não é necessário percorrer
// todos os elementos do conjunto para determinar se um elemento pertence a ele.
const PREJUDICIAIS = new Set(['NO2', 'SO2', 'CO', 'FHO']);

// Redefinindo arr com o operador spread para juntar todas as listas e facilitar o processamento.
arr = [...lista1, ...lista2, ...lista3];

let moleculasPreujdiciais = arr.filter(molecula => PREJUDICIAIS.has(molecula));
if (moleculasPreujdiciais.length > 0) {
  qualFiltro = true;
  qualMolecula = moleculasPreujdiciais[0];
}

if (!qualFiltro)
  print('Filtro Simples');
else
  print(`Filtro Específico para a Molécula ${qualMolecula}`)
