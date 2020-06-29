class Scenario{
  constructor(imagem, velocity){
    this.imagem = imagem;
    this.velocity = velocity; //Determina a velocidade de movimentacao do cenario. Valor que sera decrementado no eixo X
    this.x1 = 0; //ponto inicial do cenario no eixo x
    this.x2 = width; //ponto inicial do cenario2 no eixo x
  }
  
//exibe nossos backgrounds de acordo com o calculo aritimetico executado no move dos atributos x1 e x2 criados com o Constructor
  exibe(){
    image(this.imagem, this.x1, 0, width, height); //exibe a imagem na tela
    image(this.imagem, this.x2, 0, width, height);
  }

  //Animacao do cenario - Move faz com que os backgrouds diminuam a cada chamada do Draw e faz uma verificacao de tamanho do background para reposicionar no final do width causando a impressao de movimentacao do cenario.
  move(){
    this.x1 -= this.velocity;
    this.x2 -= this.velocity;
    
    if(this.x1 < -width){
      this.x1 = width;
    }
    if(this.x2 < -width){
      this.x2 = width;
    }
  
  }
}
