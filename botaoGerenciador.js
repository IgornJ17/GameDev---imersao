class BotaoGerenciador{
    constructor(text, x, y){
      this.text = text;
      this.positionX = x;
      this.positionY = y;
      this.botao = createButton(this.text);
      this.botao.addClass("bttn-fill bttn-md bttn-primary");
    }
  
  //desenha o button e adciona o Listener de evento
  draw(){
    this.botao.position(this.positionX, this.positionY);
    var botaoIniciar = document.querySelector('button');
    botaoIniciar.addEventListener("click", () => this._alteraCena()); // Escutador de evento responsavel por monitorar o click do button e executar a arrowFunction.
  }
  
  //metodo "privado" responsavel por alterar a cena e remover o botao caso ele seja acionado.
  _alteraCena(){
    if(this.text === 'reset' || this.text === 'Iniciar'){
      this.botao.remove();
      cenaAtual = 'jogo';
      totalLifes = 5;
      loop();
    }else{
      cenaAtual = 'telaInicial';
    }  
  }
}