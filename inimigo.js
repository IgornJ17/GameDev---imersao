class Inimigo extends Animacao{
    constructor(matrizSprite, spriteSet, positionX, medidasInimigo, velocity, delay){
        super(matrizSprite, spriteSet, positionX, medidasInimigo);
        this.velocity = velocity
        this.delay = delay;
        this.positionX = width + this.delay;
    }

  move(){
    this.positionX -= this.velocity;//Decrementa posicao X inicial do inimigo a cada chamada da funcao move() fazendo o inimigo se mover de acordo com o atributo velocity
    if(this.positionX < -this.positionX - this.delay){ //Verificacao da posicao do objeto Inimigo na tela de exibicao
      this.positionX = width - 52
    }   
  } 
}
