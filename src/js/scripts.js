//Array

let musicas = [
  {titulo: 'Luxúria', artista: 'Matuê, Xamã', src: './src/audio/01.mp3', img: './src/image/01.jpg', link: 'https://www.youtube.com/watch?v=eycuj9jczm0'},
  {titulo: 'Caracol', artista: 'Brandão', src: './src/audio/02.mp3', img: './src/image/02.jpg', link: 'https://www.youtube.com/watch?v=nTD66AHeU1E'},
  {titulo: 'Elefante', artista: 'Brandão', src: './src/audio/03.mp3', img: './src/image/03.jpg', link: 'https://www.youtube.com/watch?v=Yexo2Ud_3Cw'},
  {titulo: 'Royal Salute', artista: 'Danzo', src: './src/audio/04.mp3', img: './src/image/04.jpg', link: 'https://www.youtube.com/watch?v=YD-W_7I-168'},
  // {titulo: 'Se Essa Noite Eu Morrer', artista: 'Denov, Sidoka', src: './src/audio/05.mp3', img: './src/image/05.jpg', link: 'https://www.youtube.com/watch?v=63sXnStb8X4'},
  {titulo: 'Mercedes', artista: 'Jé, MC IGU', src: './src/audio/06.mp3', img: './src/image/06.jpg', link: 'https://www.youtube.com/watch?v=CSXs5KXfrHo'},
  // {titulo: 'Al Capone', artista: 'Jovem Dex', src: './src/audio/07.mp3', img: './src/image/07.jpg', link: 'https://www.youtube.com/watch?v=GT6Ja-8FRcY'},
  {titulo: 'Milhão', artista: 'Leozin', src: './src/audio/08.mp3', img: './src/image/08.jpg', link: 'https://www.youtube.com/watch?v=eAHWRy1JKME'},
  {titulo: 'Slow Mo 2', artista: 'Leozin, Dudu MC', src: './src/audio/09.mp3', img: './src/image/09.jpg', link: 'https://www.youtube.com/watch?v=Fruog8rds6g'},
  {titulo: 'Quieto', artista: 'Leviano', src: './src/audio/10.mp3', img: './src/image/10.jpg', link: 'https://www.youtube.com/watch?v=hgwGO8Kpp1U'},
  // {titulo: 'Noite Fria pt.2', artista: 'Sidoka', src: './src/audio/11.mp3', img: './src/image/11.jpg', link: 'https://www.youtube.com/watch?v=78QJZFdFoYM'},
  {titulo: 'Camiseta Cara', artista: 'Sidoka', src: './src/audio/12.mp3', img: './src/image/12.jpg', link: 'https://www.youtube.com/watch?v=llVxqbos3ro'},
  // {titulo: 'LEGO', artista: 'The Boy', src: './src/audio/13.mp3', img: './src/image/13.jpg', link: 'https://www.youtube.com/watch?v=RzNWj6LHWA0'},
  {titulo: 'Lifestyle', artista: 'The Boy', src: './src/audio/14.mp3', img: './src/image/14.jpg', link: 'https://www.youtube.com/watch?v=YnqwdY-oq3g'},
  // {titulo: 'YSL', artista: 'The Boy', src: './src/audio/15.mp3', img: './src/image/15.jpg', link: 'https://www.youtube.com/watch?v=-01ppvpKGSc'},
  {titulo: 'Mistério', artista: 'Trunks', src: './src/audio/16.mp3', img: './src/image/16.jpg', link: 'https://www.youtube.com/watch?v=h_kMb1F3xwg'},
  {titulo: 'Águia', artista: 'DomLaike', src: './src/audio/17.mp3', img: './src/image/17.jpg', link: 'https://www.youtube.com/watch?v=mZOLt169J68'},
  {titulo: 'Cinto de Grife', artista: 'Aimar, Dael, Leviano', src: './src/audio/18.mp3', img: './src/image/18.jpg', link: 'https://www.youtube.com/watch?v=lsw61A6iE80'},
  // {titulo: 'PAPARAZZI!', artista: 'Jovem Dex, Leviano, Brandão', src: './src/audio/19.mp3', img: './src/image/19.jpg', link: 'https://www.youtube.com/watch?v=ItWZP06sdOg'},
  // {titulo: 'WAU', artista: 'Trunks', src: './src/audio/20.mp3', img: './src/image/20.jpg', link: 'https://www.youtube.com/watch?v=f8ivDp9Q9ks'},
  // {titulo: 'Ouro', artista: 'BProblemx, Sidoka, XAVS', src: './src/audio/21.mp3', img: './src/image/01.jpg', link: 'https://www.youtube.com/watch?v=7UhmFQjrHq4'},
  {titulo: 'Scarface', artista: 'Tchelo Rodrigues', src: './src/audio/22.mp3', img: './src/image/22.jpg', link: 'https://www.youtube.com/watch?v=9gG6pNq6lp4'},
  // {titulo: 'Camisa 10', artista: 'MC Hariel', src: './src/audio/23.mp3', img: './src/image/23.jpg', link: 'https://www.youtube.com/watch?v=3yhbc9U7k8w'},
  {titulo: 'Passos', artista: 'Tchelo Rodrigues', src: './src/audio/24.mp3', img: './src/image/24.jpg', link: 'https://www.youtube.com/watch?v=QIbwZa-xA6w'},
  {titulo: 'Kartier', artista: 'Tillmann', src: './src/audio/25.mp3', img: './src/image/25.jpg', link: 'https://www.youtube.com/watch?v=Nlhwp54qmeo'},
  {titulo: 'Noite de Hostilidade', artista: 'Tchelo Rodrigues', src: './src/audio/26.mp3', img: './src/image/26.jpg', link: 'https://www.youtube.com/watch?v=LhH146UduLw'},
  {titulo: 'Milhão', artista: 'Leozin', src: './src/audio/27.mp3', img: './src/image/27.jpg', link: 'https://www.youtube.com/watch?v=eAHWRy1JKME'},
  {titulo: 'Favorito', artista: 'Trunks', src: './src/audio/28.mp3', img: './src/image/28.jpg', link: 'https://www.youtube.com/watch?v=snZzebzfMTw'},
  {titulo: 'Bem Mais', artista: 'Nicx', src: './src/audio/29.mp3', img: './src/image/29.jpg', link: 'https://www.youtube.com/watch?v=XSsjKXBhzMQ'},
]

// Variáveis para o script
let musica = document.querySelector('audio');
const volume = 0.2;
musica.volume = volume; //Definindo o volume padrão da música
let indexMusica = 0;
let barra = document.querySelector('progress');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.capa');
let nomeMusica = document.querySelector('.titulo');
let nomeArtista = document.querySelector('.artista');
let anterior = document.querySelector('.anterior');
let proxima = document.querySelector('.proxima');
let link = document.querySelector('#link-youtube');
let checkbox = document.querySelector('#aleatorio');

//Eventos de mouse
document.querySelector('.botao-play').addEventListener('click', tocarMusica); //(evento, função)
document.querySelector('.botao-pause').addEventListener('click', pararMusica); //(evento, função)
musica.addEventListener('timeupdate', atualizarBarra); //(evento, função)

// Definindo href para o link do youtube
document.querySelector('#link-youtube').setAttribute('href', musicas[0].link);

//Funções para ir para a música anterior
function musicaAnterior(){
  // TODO - Retroceder para a música anterior (se aleatório ativo ou não, voltar para a música anterior)
  if(checkbox.checked == true){
    let max = ((musicas.length) - 1);
    let anteriorAleatorio = indexAleatorio(0, max);
    renderizarMusica(anteriorAleatorio);
  }else{
    indexMusica--;
    if(indexMusica < 0){
      indexMusica = ((musicas.length) - 1);
    }
    renderizarMusica(indexMusica);
  }
}

//Funções para ir para a próxima música
function musicaProxima(){
  // TODO - Armaazenar index de músicas já reproduzidas
  if(checkbox.checked == true){
    let max = ((musicas.length) - 1);
    let proximaAleatorio = indexAleatorio(0, max);
    renderizarMusica(proximaAleatorio);
  }else{    
    indexMusica++;
    if(indexMusica > ((musicas.length) - 1)){
      indexMusica = 0;
    }
    renderizarMusica(indexMusica);
  }
}

//Funções 
function renderizarMusica(index){
  musica.setAttribute('src', musicas[index].src); //Acessando o array
  musica.play();
  
  if(document.querySelector('.botao-pause').style.display = "none"){
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
  }
  
  musica.addEventListener('loadeddata', () => { //Evento que só é executado depois que a música for carregada
    nomeMusica.textContent = musicas[index].titulo; //Alterando as informações das músicas
    nomeArtista.textContent = musicas[index].artista; //Alterando as informações das músicas
    imagem.setAttribute('src', musicas[index].img); //Trocando a imagem de capa
    document.body.style.backgroundImage = `url(${musicas[index].img})`; // Trocando imagem de fundo da página com a imagem da capa
    link.setAttribute('href', musicas[index].link);
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
  })
}

function atualizarBarra(){
  barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100)+ '%'; //Math.floor arredonda um valor para baixo
  let tempoDecorrido = document.querySelector('.inicio'); //Alterando o contador de tempo do decorrer da música
  tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
  let duracao = segundosParaMinutos(Math.floor(musica.duration)); //Alterando o tempo total da música
  if(duracao == null || duracao == "null:null" || duracao == undefined || duracao == "undefined:undefined" || duracao == NaN || duracao == "NaN:NaN"){
    duracaoMusica.textContent = "0:00";
  }else{
    duracaoMusica.textContent = duracao;
  }
}

function segundosParaMinutos(segundos){
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if(campoSegundos < 10){
    campoSegundos = '0' + campoSegundos;
  }
  return campoMinutos + ":" + campoSegundos;
}

function tocarMusica(){
  musica.play();
  document.querySelector('.botao-pause').style.display = 'block'; //Trocando regra CSS para exibir ou não elemento
  document.querySelector('.botao-play').style.display = 'none'; //Trocando regra CSS para exibir ou não elemento
}

function pararMusica(){
  musica.pause(); 
  document.querySelector('.botao-play').style.display = 'block'; //Trocando regra CSS para exibir ou não elemento
  document.querySelector('.botao-pause').style.display = 'none'; //Trocando regra CSS para exibir ou não elemento
}

setInterval ( function () { //Função que troca a música após uma ter sido exibida (verifica isso a cada 1 segundo)
  let execucaoMusica = Math.floor((musica.currentTime / musica.duration) * 100);
  if(execucaoMusica == 100){
    musicaProxima();
  }
}, 1000);

// TODO - Implementar verificação se index já foi reproduzido
function indexAleatorio(min, max){ //Função que aleatoriamente gera um número de faixa para ser renderizada
  min = Math.ceil(min);
  max = Math.floor(max);
  let retorno =  Math.floor(Math.random() * (max - min + 1)) + min
  return (retorno);
}

function volumeMenos(elem){
  elem.setAttribute('disabled', 'true');
  if(musica.volume >= 0.1){
    musica.volume = musica.volume -.1;
    nivelVolume(("O volume está em "+Math.ceil((musica.volume)*100))+"%");
  }else{
    nivelVolume("O volume está em 0%");
  }
  elem.setAttribute('disabled', 'false');
}

function volumeMudo(elem){
  elem.setAttribute('disabled', 'true');
  musica.muted = true; 
  document.querySelector('.volume-mudo').setAttribute('onclick', 'volumeAtivo(this)');
  nivelVolume("O volume está mudo");
  elem.setAttribute('disabled', 'false');
}

function volumeAtivo(elem){
  elem.setAttribute('disabled', 'true');
  musica.muted = false; document.querySelector('.volume-mudo').setAttribute('onclick', 'volumeMudo(this)');
  nivelVolume("O volume está ativo");
  elem.setAttribute('disabled', 'false');
}

function volumeMais(){
  if(musica.volume <= 0.9){
    musica.volume = musica.volume +.1;
    nivelVolume(("O volume está em "+Math.ceil((musica.volume)*100))+"%");
  }else{
    nivelVolume("O volume está no máximo");
  }
}

function nivelVolume(msg){
  let alert = document.querySelector('#alert-box');
  alert.style.display = "block";
  document.querySelector('#msg').textContent = msg;
  alert.classList.add('fade-in');
  setTimeout(() => {
    alert.classList.remove('fade-in');
    alert.classList.add('fade-out');
    setTimeout( () => {
      alert.classList.remove('fade-out');
      alert.style.display = "none";
    }, 250)
  }, 3000)
}

function ativaCheckbox(){
  let btnAleatorio = document.querySelector('#icon-aleatorio');
  if(checkbox.checked == false){ //Caso o aleatório não esteja ativo
    btnAleatorio.classList.add('enable'); 
    checkbox.checked = true;
    // console.log("Modo aleatório ativo");
  }else{ //Em caso do aleatório já estar ativo, ele é desativado
    btnAleatorio.classList.remove('enable');
    btnAleatorio.classList.add('disabled'); 
    checkbox.checked = false;
    // console.log("Modo aleatório desativado");
  }
}

window.addEventListener('load', () => {
  checkbox.checked = false;
});