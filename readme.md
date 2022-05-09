Front - angular/desafio-front (Angular)
Back - angular/desafio-back (Node/Express)




Formato do objeto Player - Ranking

```
{
    playerName: <string, 15>,
    data: <timestamp>,
    score: <int>

}
```

Regras do jogo:
O jogo deverá ser de turnos, sendo cada turno uma interação do jogador e uma interação automática do inimigo.

O jogador e o inimigo deverão ter uma barra de vida, ambos terão a mesma quantidade de pontos de vida (100).

O jogador deverá ter 4 botões de interação a seguir:

Ataque Básico
O jogador irá causar um dano no inimigo que será reduzido dos pontos de vida do mesmo, deve ser um valor aleatório entre 5 e 10.

Ataque Especial
O jogador irá causar um dano no inimigo que será reduzido dos pontos de vida do mesmo, deve ser um valor aleatório entre 10 e 20.
O ataque especial necessita de no mínimo 2 turnos após utilização e deverá estar desabilitado enquanto não carregado, ou seja, o botão não pode ser acionado por 2 turnos após sua utilização.
Ao acionar o ataque especial o inimigo tem 50% de chance de não atacar no próximo turno, e deve ser apresentado um indicativo de que o inimigo está atordoado (Opcional).

Curar
O jogador receberá um aumento nos seus pontos de vida que deverá ser um valor randômico entre 5 e 15.

Desistir
O jogo deverá ser terminado e ir para tela de inicio do jogo

Ações do inimigo

As ações do inimigo devem acontecer automaticamente, logo após uma das ações do jogador, ou seja, se os pontos de vida do inimigo atingirem zero antes da sua ação ele não deve realizar a mesma

O inimigo pode realizar as seguintes ações:

Ataque Básico
O inimigo irá causar um dano no jogador que será reduzido dos pontos de vida do mesmo, deve ser um valor aleatório entre 6 e 12.

Ataque Especial
O inimigo irá causar um dano no jogador que será reduzido dos pontos de vida do mesmo, deve ser um valor aleatório entre 8 e 16.
O ataque especial do inimigo deverá ser acionado automaticamente a cada 3 turnos.

Indicadores do jogo (Opcional)

Tanto o jogador quanto o inimigo deverão ter a cor da barra de vida de acordo com:

verde, caso estejam com um valor maior ou igual a 50% de vida

amarelo, caso estejam com menos de 50% de vida

vermelho, caso estejam com menos de 20% de vida

O jogo deverá conter uma seção de log de acordo com a ação do jogador e do inimigo (Opcional)

Exemplo:

Jogador usou "Curar" (+10 pontos de vida)
Inimigo usou "Ataque Básico" (-6 pontos de vida)
Jogador usou "Ataque Especial" (-11 pontos de vida)
Inimigo usou "Ataque Básico" (-8 pontos de vida)

Final do jogo

Cálculo da pontuação

O resultado do jogo deve seguir o cálculo: (Pontos de vida restantes do jogador \* 1000) / Número de turnos jogados

Ao final da simulação o jogo deverá apresentar uma mensagem com a pontuação final

O resultado deve ser registrado no ranking através da API Rest, o usuário deve informar seu nome

Tela de Ranking

Ler os dados da API e mostrar a listagem de jogadores e suas respectivas pontuações em ordem decrescente
