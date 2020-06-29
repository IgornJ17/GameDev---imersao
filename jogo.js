class Jogo{
  constructor(){
     this.inimigoAtual = 0; 
  }
  
//Metodo de configuracao do modo Jogo. Intanciacao de classes necessarias 
  setup(){
      scenario = new Scenario(imagemCenario, velocidade);
      life = new Life(totalLifes, imagemLife);
    
      inimigoGota = new Inimigo(matrizInimigoGota, imagemInimigoGota, width-52, medidasInimigoGota, randomVelocity(), aleatoriedade("d"));
      inimigos.push(inimigoGota);
    
      flyEnemyGota = new Inimigo(matrizFlyEnemy, imagemFlyEnemyGota, width-52, medidasflyEnemyGota, randomVelocity(), aleatoriedade("d"));
      inimigos.push(flyEnemyGota);
    
      enemyTroll = new Inimigo(matrizEnemyTroll, imagemEnemyTroll, width, medidasTroll, randomVelocity(), aleatoriedade("C"));
      inimigos.push(enemyTroll);
    
      personagem = new Personagem(matrizPersonagem, imagemPersonagem, 10, medidasPersonagem);
      pontucao = new Pontuacao();
  }
  
//Metodo que captura a keyCode pressionada pelo usuario, faz a verificacao e executa as insttrucoes associadas 
  arrowPressionada(){
        if (key === 'ArrowUp') {
            personagem.pula();
            document.addEventListener('keydown', function(event){
              if(event.keyCode === 38){ //captura a action de click na tela e verifica o atributo KeyCode do objeto Event
                somPulo.play();
                console.log("apertado")
              }
            })
      }
  }
  
//metodo main da class Jogo, executa todas as animacoes e metodos para animacoes que o modo Jogo precisa.
  start(inimigos){
      scenario.exibe();
      scenario.move();
      personagem.exibe();
      inimigos.forEach(function(inimigo){
        inimigo.exibe();
        inimigo.move();
      })
      life.exibe(totalLifes);
      personagem.aplicaGravidade();//Aplica a gravidade a posicao do personagem em toda a execucao do draw()...
      pontucao.exibe();      
  }  
}