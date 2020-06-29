//FUNCOES AUXILIARES===============================================================================================

function main(inimigos){
  
    //Verifica qual modo de jogo corrente e chama a tela correta.
    if(cenaAtual === 'jogo'){
      jogo.start(inimigos);
    }
    if(cenaAtual === 'telaInicial'){
      telaInicial.start();
    }
}

//Gera valoreles aleatorios de acordo com o Sistema de Numeracao escolido.
function aleatoriedade(tipo){
  let tipos = ["U","u","d", "D", "C", "c"];
  if(tipo === tipos[0] || tipo === tipos[1]){
    return Math.random().toFixed(1) * 10; //multiplica por 10 para retornar um inteiro de 1 U
  }
  if(tipo === tipos[2] || tipo === tipos[3]){
    return Math.random().toFixed(2) * 100; //multiplica por 100 para retornar um inteiro de 1 D
  }
  if(tipo === tipos[4] || tipo === tipos[5]){
    return Math.random().toFixed(3) * 1000; //multiplica por 100 para retornar um inteiro de 1 C
  }
}

//Gera um valor aleatorio entre 8 e 25 para determinar a velocidade de movimento do inimigo.
function randomVelocity(){
  return parseInt(random(8, 25));//retorna um inteiro entre 8 e 25
}

//Funcao responsavel pela verificacao de colisao entre o objeto personagem e o objeto Inimigo. 
function colide(inimigo, inimX, inimY, persX, persY, persCirc){ // Argumentos utilizados para melhorar a precisao dos objetos do circle.
    if(personagem.colisaoPersona(inimigo, inimX, inimY, persX, persY, persCirc)){ // Recebe inimigo como parametro para obter os dados dessa Entidade.
      console.log("colidiu");
      life.lostLife(); //Chama o metodo lostLife pra decrementar o total de life do Jogo.
      personagem.setInvulnerable(); // Torna a personagem invencivel por 1 segundo apos a primeira colisao para que nao retire todas as vidas a cada chamada de draw.
      if(totalLifes == -1){ // verifica se ainda tem life pra continuar jogando.
           image(imagemGameOver, width/2 - 200, height/3);
           botaoReset = new BotaoGerenciador("reset", width/2 - 10,  height/3 + 200);
           noLoop(); // Funcao responsavel pela parada de execucao da funcao draw()..
           botaoReset.draw();
           pontucao.pontuacao = 0;
           
      }
  }
}

//Carrega as imagens necessarias para o jogo.
function loadImages(){
   imagemCenario = loadImage(imagens.cenario); 
   imagemPersonagem = loadImage(imagens.personagem);
   imagemInimigoGota = loadImage(imagens.enemyGota);
   imagemEnemyTroll = loadImage(imagens.enemyTroll);
   imagemFlyEnemyGota = loadImage(imagens.enemyGotaVoadora);
   imagemGameOver = loadImage(imagens.gameOver);
   imagemScenarioTelaInicial = loadImage(imagens.cenarioTelaInicia);
   fonteTelaInicial = loadFont('/imagem/cenario/fonteTelaInicial.otf');
   imagemLife = loadImage(imagens.life);
    
}

//FUNCOES AUXILIARES===============================================================================================


//FUNCOES DE EXECUCAO DA APLICACAO=================================================================================

//Funcao responsavel por carregar todos os arquivos de nosso fileSystem necessarios para executar o jogo e a animacao
function preload(){
   loadImages();
   somJogo = loadSound('/sons/trilha_jogo.mp3');
   somPulo = loadSound("/sons/somPulo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo(); //instacia o modo Jogo
  jogo.setup();//executa as instrucoes de configuracao do modo jogo
  botaoGerenciador = new BotaoGerenciador("Iniciar", width/2 , height/2);
  telaInicial = new TelaInicial();//instacia o modo Tela inicial
  telaInicial.setup(); //executa as instrucoes de configuracao do modo Tela Inicial
  frameRate(30); //Quantidade de repeticao da funcao draw() a cada 1 segundo.
  //somJogo.loop(); //Executa a musica em loop para que nao pare de tocar
}

//Observable ou Listener de Eventos================================================================================

function keyPressed() {
  jogo.arrowPressionada(); // Chama o metodo de verificacao do KeyCode capturado e executa a action de resposta do evento capturado.
}

//=================================================================================================================

function draw() {
  main(inimigos);
  pontucao.point()
  //cada Draw chama esse for para verificar em qual objeto houve a colisao e gera uma melhora na precisao
  for(var i = 0; i < inimigos.length; i++){
    switch (i) {
      case 0:
          colide(inimigos[0], 40, 30, 50, 60, 10); //verifica se colidiu com o objeto 1
          break;
      case 1:
          colide(inimigos[1], 60, 40, 50, 60, 10); //verifica se colidiu com o objeto 2
          break;
      case 2:
          colide(inimigos[2], 130, 140, 50, 60, 10); //verifica se colidiu com o objeto 3
          break;
    }
  }
}

//FUNCOES DE EXECUCAO DA APLICACAO=================================================================================
















/*let matrizInimigo = [];

for(var i = 0; i <= 626; i+=104){
  for(var j = 0; j <= 312; j+=104){
      var array = [j, i];
      matrizInimigo.push(array);
  }
}

let matrizPersonagem = [];

 for(var i = 0, i >= 810, i+=270){
   for(var j = 0; j >= 660; j+= 220){
     
   }
 }*/