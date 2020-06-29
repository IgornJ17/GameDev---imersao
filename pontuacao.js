class Pontuacao{
    constructor(){
      this.pontuacao = 0;
    }
  
  exibe(){
     fill('#fff');
     textSize(80);
     text((this.pontuacao / 10).toFixed(0), width/2, 90)
  }
  
  point(){
   return this.pontuacao++
  }
}