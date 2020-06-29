class TelaInicial{
    constructor(){
    
    } //Executa o metodo especial Constructor padrao do JS
  
  setup() {scenarioTelaInicial = new ScenarioTelaInicial(imagemScenarioTelaInicial)} //instancia a classe do modo tela inicial para o sketch utilizar em seu draw
  start() {scenarioTelaInicial.exibe()} // exibe a imagem da tela inicial junto com seus outros objetos. Metodo main de TelaInicial.
}