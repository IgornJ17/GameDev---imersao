
class Personagem extends Animacao{
  constructor(matrizSprite, spriteSet, positionX, medidasPersonagem){
        super(matrizSprite, spriteSet, positionX, medidasPersonagem)
        
        this.yInicial = height - this.alturaPersona; //Armazena a Posicao inicial do personagem no plano da Tela
        this.positionY = this.yInicial;//Posicao principal do personagem localizado na parte debaixo da tela
        this.velocidadeDoPulo = 0;// variavel de controle do pulo...
        this.gravidade = 3; //Valor que sera decrementado do personagem no eixo Y para que possa cair apos o pulo
        this.alturaPulo = -40
        this.qtdPulos = 0;
        this.invulnerable = false;
  }
    
//faz uma verificacao da qtd de pulo executada pelo usuario antes de executar a atribuicao da altura do pulo em velocidade do pulo
  pula() {
    if(this.qtdPulos < 2){
        this.velocidadeDoPulo = this.alturaPulo; //Subtrai 30 da posicao y = 0 que e a altura do pulo da personagem...
        this.qtdPulos++;
    } 
  }
  
  //Incrementa o atributo altura do pulo de acordo com o atributo gravidade para que a personagem possa voltar para o chao e faz a verificacao da posicao Y com a posicao inicial do personagem na tela.
  aplicaGravidade(){
     this.positionY += this.velocidadeDoPulo; //aplica o valor do velocidadeDoPulo a posicaoY da personagem no momento de execucao
     this.velocidadeDoPulo += this.gravidade; //aumenta o valor da velocidadeDoPulo de acordo com o valor do atributo gravidade a cada chamada de aplicaGravidade() fazendo com que a positionY seja incrementada a cada chamada de aplicaGravidade..
    
    if(this.positionY > this.yInicial){ // verificacao que faz com que a personagem caia na posicao inicial
      this.positionY = this.yInicial;
      this.qtdPulos = 0;
    }
  }
  
  setInvulnerable(){
    this.invulnerable = true;
    setTimeout(() => {
      this.invulnerable = false
    }, 800); //apos 1 segundo o atributo invulnerable ira receber false retirando a invencibilidade de nosso personagem a cada 1 segundo.
  }
  
  colisaoPersona(inimigo, inimX, inimY, persX, persY, persCirc){
    /*noFill();
    circle(this.positionX + persX, this.positionY + persY, this.larguraPersona + persCirc)
    circle(inimigo.positionX + inimX, inimigo.positionY + inimY, inimigo.larguraPersona)*/
    if(this.invulnerable){
      return false;
    }else{
      const precisao = .7//constante de utilizacao para aumento da precisao da colisao entre os dois Objetos..
      var colisao = collideCircleCircle(this.positionX + persX, this.positionY + persY, this.larguraPersona * precisao + persCirc, inimigo.positionX + inimX, inimigo.positionY + inimX, inimigo.larguraPersona * precisao) 
      return colisao;// retorna True ou False para colisao entre os dois objetos.
    }
  }
}