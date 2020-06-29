class ScenarioTelaInicial{
  constructor(imagem){
      this.imagem = imagem;
  }
  
   exibe(){
     this._imagemFundo();
     this._botao();
     this._texto();
     
  }
  
  _imagemFundo(){
     image(this.imagem, 0, 0, width, height)
  }
  
  _texto(){
    textSize(100);
    textAlign(CENTER);
    textFont(fonteTelaInicial);
    text("The witcher", width/2, 90 + 100);
    textSize(200);
    text("adventures", width/2 + 5, 100 + 300);
  }
  _botao(){
    botaoGerenciador.draw();
  }
}