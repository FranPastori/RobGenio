// imagens
let imagemFundo;
let imagemErro;
let imagemAcerto;
let imagemPergunta;
let imagemBalao;

//Análise de resposta!

let numeroDaPergunta = 0 ;
let caixaDeTexto;

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
    image (imagemBalao, 330,20,285,150)
    textSize(14)
    textAlign(CENTER)
    textStyle(BOLD)
    text ("Qual seu livro favorito?",480,80) 
  
  }
}
function exibirCaixaDeResposta(){
  caixaDeTexto.position(60,360);
  caixaDeTexto.size(450,20);
  
}