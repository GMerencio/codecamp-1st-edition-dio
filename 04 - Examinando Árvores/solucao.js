//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = gets().split(',')

//TODO: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável
amostra.forEach((saude) => {
  if (saude >= 75)
    print('Descartar da lista');
  else if (saude >= 50)
    print('Manter sob observação');
  else
    print('Isolar e iniciar protocolo de cuidados');
});
