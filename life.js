class Life{
  constructor(total, imagem){
    this.maxLife = total;
    this.imagem = imagem;
    this.largura = 25;
    this.altura = 25;
    this.x = 50;
    this.y = 50;
  }
  
  exibe(total){
      for(let i = 0; i < total; i++){
         const margem = i * 10;
         const posicao = this.x * (i+1);  
         image(this.imagem, margem + posicao, this.y , this.largura, this.altura);
      }
    }
  
  lostLife(){
    totalLifes--;
    console.log(totalLifes);
  
  }
}