//VARIAVEIS DE BLOCO/LOCAIS DO CODIGO==============================================================================

var imagemCenario;
var imagemPersonagem;
var imagemInimigo;
var imagemEnemyTroll;
var imagemFlyEnemyGota;
var imagemGameOver;
var imagemScenarioTelaInicial;
var imagemLife;
var fonteTelaInicial;

var somJogo;

var botaoGerenciador;
var botaoReset;
var scenario;
var scenarioTelaInicial;
var personagem;
var inimigoGota;
var enemyTroll;
var flyEnemyGota;
var inimigos = [];
var animacao;
var pontucao;
var life;
var imagens = {
  cenario: 'imagem/cenario/floresta.png',
  personagem: 'imagem/personagem/correndo.png',
  enemyGota: 'imagem/inimigo/gotinha.png',
  enemyTroll: 'imagem/inimigo/troll.png',
  enemyGotaVoadora: 'imagem/inimigo/gotinha-voadora.png',
  gameOver: 'imagem/cenario/game-over.png',
  cenarioTelaInicia: 'imagem/cenario/telaInicial.png',
  life: 'imagem/personagem/coracao.png'
}
var totalLifes = 5;

var telaInicial;
var jogo;

var cenaAtual = 'telaInicial'
var cenas = ['telaInicial', 'jogo'];

//VARIAVEIS DE BLOCO/LOCAIS DO CODIGO==============================================================================


//CONSTATNTES DO CODIGO============================================================================================
const matrizEnemyTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000]
];
const medidasTroll = [200, 200, 400, 400, 0];
const matrizInimigoGota = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
] //Separa as imagens do inimigo para ser aplicados em cada Frame
const medidasInimigoGota = [52, 52, 104, 104, 35];
const matrizPersonagem = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ]; //Separa as imagens do personagem para ser aplicados em cada Frame
//Determina a velocidade de movimento do cenario pela variavel x das abscissas da window do Browser.
const medidasPersonagem = [100, 120, 220, 270, 35];
const matrizFlyEnemy = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]
const medidasflyEnemyGota = [100, 85, 200, 150, 400];
const velocidade = 5;

//CONSTATNTES DO CODIGO============================================================================================

