class Animacao {
    constructor(matriz, imagem, x, medidas){
      this.matrizSprite = matriz; //Matriz que ira mapear as imagens do mapa de Sprites da animacao.
      this.spriteSet = imagem; //Conjunto de Sprites que sera utilizado na animacao
      this.larguraPersona = medidas[0];// Width do personagem - Largura do personagem
      this.alturaPersona = medidas[1]; // Altura do personagem
      this.positionX = x; //Posicao da Entidade no eixo x(Abscissas) da Tela 
      this.larguraSprite = medidas[2]; //Largura total do Mapa de Sprite
      this.alturaSprite = medidas[3]; //Altura total do Mapa de Sprite
      this.variacaoY = medidas[4]; //Variacao de altura de cada personagem
      this.positionY = (height - this.alturaPersona) - this.variacaoY//Posicao da Entidade no eixo y(ordenadas) da Tela - diferenca entre a altura do personagem menos a  variavel height(Altura total da Tela)
    
      this.frameAtual = 0; //Contador de frame, responsavel por correr a matriz e criar a animacao
    }  
  
  
//METODOS ANIMACAO===================================================================================================
  
//Exibe nossa imagem no Draw do Canvas===============================================================================
    exibe(){
        image(this.spriteSet, this.positionX , this.positionY, this.larguraPersona, this.alturaPersona, this.matrizSprite[this.frameAtual][0], this.matrizSprite[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
      //Incrementa o Frame para percorrer todo nosso Mapa de Sprite.
        this.personaAnima(); 
    }

    personaAnima(){
        var tamanhoMatriz = this.matrizSprite.length - 1; //Tamanho total da Matriz de selecao do MapSprite
        this.frameAtual++;
        if(this.frameAtual > tamanhoMatriz) this.frameAtual = 0;
      
    } 
}

//METODOS ANIMACAO===================================================================================================)