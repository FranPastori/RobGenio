// imagens
let imagemFundo;
let imagemErro;
let imagemAcerto;
let imagemPergunta;
let imagemBalao;

//Análise de resposta!

let numeroDaPergunta = 0 ;
let caixaDeTexto;
let nome="";


function preload( ) {
  imagemFundo = loadImage('fundo.jpg');
  imagemErro = loadImage('roboErro.png');
  imagemAcerto= loadImage('roboAcerto.png');
  imagemPergunta= loadImage('roboPergunta.png');
  imagemBalao= loadImage('balao.png')
  
}
function setup() {
  createCanvas(600, 400);
  noLoop();
  caixaDeTexto = createInput();
}

function draw() {
  background(imagemFundo);
  image(imagemPergunta,300,100,100,200)
  image (imagemBalao, 330,20,285,150)
  textSize(14)
  textAlign(CENTER)
  textStyle(BOLD)
  text ("Seja Bem Vindo!\n"+"Para adivinhar seu nome responda\n"+"minhas perguntas com frases longas.\n"+"Clique na tela para começar.",465,50) 
}

function mousePressed(){
  if (numeroDaPergunta==0){numeroDaPergunta++}
  perguntar();
  exibirCaixaDeResposta();
}

function perguntar(){
  if (numeroDaPergunta == 1){
    chamaCena("Qual seu livro favorito?")}
  else if (numeroDaPergunta == 2){
    chamaCena("Qual seu filme favorito?");
  } 
 else if (numeroDaPergunta == 3){
    chamaCena("Qual sua fruta favorita?");
  }
 else if (numeroDaPergunta == 4){
    chamaCena("Qual sua fruta favorita?");
  }
else { 
    chamaCena("Seu Nome é \n")
    revelarNome();}
    
}
function exibirCaixaDeResposta(){
  caixaDeTexto.position(60,360);
  caixaDeTexto.size(450,20);
  caixaDeTexto.elt.placeholder="Responda aqui e pressione a tecla enter"
}


function keyPressed (){
  if (keyCode === ENTER){
    if(respostaValida()){
    descobrirNome();
    }
    caixaDeTexto.value("");
  
  }
    }
  
function descobrirNome(){
 let texto =  caixaDeTexto.value();
 if (texto.includes("."))
 {nome= nome + texto[0];};
  numeroDaPergunta++;
  perguntar();
}
function chamaCena (pergunta){
    image (imagemBalao, 330,20,285,150)
    textSize(14)
    textAlign(CENTER)
    textStyle(BOLD)
    text (pergunta,480,80)
    
}
function revelarNome(){
  caixaDeTexto.remove(); 
  textSize(50);
  textAlign(CENTER);
  text( nome,450,120);
}
function respostaValida(){
  
  return !caixaDeTexto.value()=="";
}
  