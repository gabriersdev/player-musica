//Array

let musicas = [
  { titulo: 'Luxúria', artista: 'Matuê, Xamã', src: './src/audio/01.mp3', img: './src/image/01.jpg', link: 'https://www.youtube.com/watch?v=eycuj9jczm0', explicit: true },
  { titulo: 'Caracol', artista: 'Brandão', src: './src/audio/02.mp3', img: './src/image/02.jpg', link: 'https://www.youtube.com/watch?v=nTD66AHeU1E', explicit: true },
  { titulo: 'Royal Salute', artista: 'Danzo', src: './src/audio/04.mp3', img: './src/image/04.jpg', link: 'https://www.youtube.com/watch?v=YD-W_7I-168', explicit: true },
  { titulo: 'Elefante', artista: 'Brandão', src: './src/audio/03.mp3', img: './src/image/03.jpg', link: 'https://www.youtube.com/watch?v=Yexo2Ud_3Cw', explicit: true },
  // {titulo: 'Se Essa Noite Eu Morrer', artista: 'Denov, Sidoka', src: './src/audio/05.mp3', img: './src/image/05.jpg', link: 'https://www.youtube.com/watch?v=63sXnStb8X4', explicit: true},
  { titulo: 'Mercedes', artista: 'Jé, MC IGU', src: './src/audio/06.mp3', img: './src/image/06.jpg', link: 'https://www.youtube.com/watch?v=CSXs5KXfrHo', explicit: true },
  // {titulo: 'Al Capone', artista: 'Jovem Dex', src: './src/audio/07.mp3', img: './src/image/07.jpg', link: 'https://www.youtube.com/watch?v=GT6Ja-8FRcY', explicit: true},
  { titulo: 'Milhão', artista: 'Leozin', src: './src/audio/08.mp3', img: './src/image/08.jpg', link: 'https://www.youtube.com/watch?v=eAHWRy1JKME', explicit: true },
  { titulo: 'Slow Mo 2', artista: 'Leozin, Dudu MC', src: './src/audio/09.mp3', img: './src/image/09.jpg', link: 'https://www.youtube.com/watch?v=Fruog8rds6g', explicit: true },
  { titulo: 'Quieto', artista: 'Leviano', src: './src/audio/10.mp3', img: './src/image/10.jpg', link: 'https://www.youtube.com/watch?v=hgwGO8Kpp1U', explicit: true },
  // {titulo: 'Noite Fria pt.2', artista: 'Sidoka', src: './src/audio/11.mp3', img: './src/image/11.jpg', link: 'https://www.youtube.com/watch?v=78QJZFdFoYM', explicit: true},
  { titulo: 'Camiseta Cara', artista: 'Sidoka', src: './src/audio/12.mp3', img: './src/image/12.jpg', link: 'https://www.youtube.com/watch?v=llVxqbos3ro', explicit: true },
  // {titulo: 'LEGO', artista: 'The Boy', src: './src/audio/13.mp3', img: './src/image/13.jpg', link: 'https://www.youtube.com/watch?v=RzNWj6LHWA0', explicit: true},
  { titulo: 'Lifestyle', artista: 'The Boy', src: './src/audio/14.mp3', img: './src/image/14.jpg', link: 'https://www.youtube.com/watch?v=YnqwdY-oq3g', explicit: true },
  // {titulo: 'YSL', artista: 'The Boy', src: './src/audio/15.mp3', img: './src/image/15.jpg', link: 'https://www.youtube.com/watch?v=-01ppvpKGSc', explicit: true},
  { titulo: 'Mistério', artista: 'Trunks', src: './src/audio/16.mp3', img: './src/image/16.jpg', link: 'https://www.youtube.com/watch?v=h_kMb1F3xwg', explicit: true },
  { titulo: 'Águia', artista: 'DomLaike', src: './src/audio/17.mp3', img: './src/image/17.jpg', link: 'https://www.youtube.com/watch?v=mZOLt169J68', explicit: true },
  { titulo: 'Cinto de Grife', artista: 'Aimar, Dael, Leviano', src: './src/audio/18.mp3', img: './src/image/18.jpg', link: 'https://www.youtube.com/watch?v=lsw61A6iE80', explicit: true },
  // {titulo: 'PAPARAZZI!', artista: 'Jovem Dex, Leviano, Brandão', src: './src/audio/19.mp3', img: './src/image/19.jpg', link: 'https://www.youtube.com/watch?v=ItWZP06sdOg', explicit: true},
  // {titulo: 'WAU', artista: 'Trunks', src: './src/audio/20.mp3', img: './src/image/20.jpg', link: 'https://www.youtube.com/watch?v=f8ivDp9Q9ks', explicit: true},
  // {titulo: 'Ouro', artista: 'BProblemx, Sidoka, XAVS', src: './src/audio/21.mp3', img: './src/image/01.jpg', link: 'https://www.youtube.com/watch?v=7UhmFQjrHq4', explicit: true},
  { titulo: 'Scarface', artista: 'Tchelo Rodrigues', src: './src/audio/22.mp3', img: './src/image/22.jpg', link: 'https://www.youtube.com/watch?v=9gG6pNq6lp4', explicit: true },
  // {titulo: 'Camisa 10', artista: 'MC Hariel', src: './src/audio/23.mp3', img: './src/image/23.jpg', link: 'https://www.youtube.com/watch?v=3yhbc9U7k8w', explicit: true},
  { titulo: 'Passos', artista: 'Tchelo Rodrigues', src: './src/audio/24.mp3', img: './src/image/24.jpg', link: 'https://www.youtube.com/watch?v=QIbwZa-xA6w', explicit: true },
  { titulo: 'Kartier', artista: 'Tillmann', src: './src/audio/25.mp3', img: './src/image/25.jpg', link: 'https://www.youtube.com/watch?v=Nlhwp54qmeo', explicit: true },
  { titulo: 'Noite de Hostilidade', artista: 'Tchelo Rodrigues', src: './src/audio/26.mp3', img: './src/image/26.jpg', link: 'https://www.youtube.com/watch?v=LhH146UduLw', explicit: true },
  { titulo: 'Milhão', artista: 'Leozin', src: './src/audio/27.mp3', img: './src/image/27.jpg', link: 'https://www.youtube.com/watch?v=eAHWRy1JKME', explicit: true },
  { titulo: 'Favorito', artista: 'Trunks', src: './src/audio/28.mp3', img: './src/image/28.jpg', link: 'https://www.youtube.com/watch?v=snZzebzfMTw', explicit: true },
  { titulo: 'Bem Mais', artista: 'Nicx', src: './src/audio/29.mp3', img: './src/image/29.jpg', link: 'https://www.youtube.com/watch?v=XSsjKXBhzMQ', explicit: true },
]

// Variáveis para o script
const audio = document.querySelector('audio');
const volumePadrao = 0.2;
audio.volume = volumePadrao;

let indexMusicaAtual = 0;
const barraProgresso = document.querySelector('.barra');
const progresso = document.getElementById('progress');
const duracaoMusica = document.querySelector('.fim');
const capa = document.querySelector('.capa');
const tituloMusica = document.querySelector('.titulo');
const artistaMusica = document.querySelector('.artista');
const botaoAnterior = document.querySelector('.anterior');
const botaoProxima = document.querySelector('.proxima');
const linkYoutube = document.getElementById('link-youtube');
const checkboxAleatorio = document.getElementById('aleatorio');
let reproducoes = [];

function renderizarMusica(index, inicio = false) {
  audio.src = musicas[index].src;

  audio.onloadeddata = () => {
    if (!inicio) tocarMusica();
    document.title = `${musicas[index].titulo} - ${musicas[index].artista}`;
    tituloMusica.textContent = musicas[index].titulo;
    artistaMusica.textContent = musicas[index].artista;
    capa.src = musicas[index].img;
    document.body.style.backgroundImage = `url(${musicas[index].img})`;
    linkYoutube.href = musicas[index].link;
    duracaoMusica.textContent = formatarTempo(audio.duration);
  };
}

function atualizarProgresso() {
  progresso.style.width = `${Math.floor((audio.currentTime / audio.duration) * 100)}%`;
  const tempoDecorrido = document.querySelector('.inicio');
  tempoDecorrido.textContent = formatarTempo(audio.currentTime);
  const duracao = formatarTempo(audio.duration);
  duracaoMusica.textContent = isNaN(duracao) ? "0:00" : duracao;
}

function formatarTempo(segundos) {
  if (isNaN(segundos)) return "0:00";

  const minutos = Math.floor(segundos / 60);
  const segundosFormatados = String(Math.floor(segundos % 60)).padStart(2, '0');
  return `${minutos}:${segundosFormatados}`;
}

function tocarMusica() {
  audio.play();
  document.querySelector('.botao-pause').style.display = 'block';
  document.querySelector('.botao-play').style.display = 'none';
}

function pararMusica() {
  audio.pause();
  document.querySelector('.botao-play').style.display = 'block';
  document.querySelector('.botao-pause').style.display = 'none';
}

function musicaAnterior() {
  if (checkboxAleatorio.checked) {
    const max = musicas.length - 1;
    const anteriorAleatorio = indexAleatorio(0, max);
    renderizarMusica(anteriorAleatorio);
  } else {
    indexMusicaAtual = (indexMusicaAtual - 1 + musicas.length) % musicas.length; //Usando módulo para voltar ao início da lista.
    renderizarMusica(indexMusicaAtual);
  }
}

function musicaProxima() {
  if (checkboxAleatorio.checked) {
    const max = musicas.length - 1;
    const proximaAleatorio = indexAleatorio(0, max);
    renderizarMusica(proximaAleatorio);
  } else {
    indexMusicaAtual = (indexMusicaAtual + 1) % musicas.length; //Usando módulo para voltar ao início da lista.
    renderizarMusica(indexMusicaAtual);
  }
}

audio.addEventListener('ended', () => {
  musicaProxima();
});

function indexAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let retorno = Math.floor(Math.random() * (max - min + 1)) + min;
  let vez = 0;

  while (reproducoes.includes(retorno) && vez < reproducoes.length) {
    retorno = Math.floor(Math.random() * (max - min + 1)) + min;
    vez += 1;
  }


  if (vez === reproducoes.length) {
    reproducoes = [];
  }

  reproducoes.push(retorno);
  return retorno;
}

// TODO - Implementar verificação se index já foi reproduzido
function indexAleatorio(min, max) { //Função que aleatoriamente gera um número de faixa para ser renderizada
  min = Math.ceil(min);
  max = Math.floor(max);
  let retorno = Math.floor(Math.random() * (max - min + 1)) + min;
  let vez = 0;

  while (reproducoes.includes(retorno) && vez < reproducoes.length) {
    retorno = Math.floor(Math.random() * (max - min + 1)) + min;
    vez += 1;
  }

  if (vez === reproducoes.length) {
    reproducoes = [];
  }

  return (retorno);
}

function volumeMenos() {
  if (audio.volume >= 0.1) {
    audio.volume = audio.volume - .1;
    if (audio.volume % 0.1 !== 0) audio.volume -= audio.volume % 0.1;
    nivelVolume(("O volume está em " + Math.ceil((audio.volume) * 100)) + "%");
  } else {
    nivelVolume("O volume está em 0%");
  }
}

function volumeMudo(elem) {
  elem.setAttribute('disabled', 'true');
  audio.muted = true;
  document.querySelector('.volume-mudo').setAttribute('onclick', 'volumeAtivo(this)');
  nivelVolume("O volume está mudo");
  elem.setAttribute('disabled', 'false');
}

function volumeAtivo(elem) {
  elem.setAttribute('disabled', 'true');
  audio.muted = false; document.querySelector('.volume-mudo').setAttribute('onclick', 'volumeMudo(this)');
  nivelVolume("O volume está ativo");
  elem.setAttribute('disabled', 'false');
}

function volumeMais() {
  if (audio.volume <= 0.9) {
    audio.volume = audio.volume + .1;
    nivelVolume(("O volume está em " + Math.ceil((audio.volume) * 100)) + "%");
  } else {
    nivelVolume("O volume está no máximo");
  }
}

let timeout, segTimeout = null;

function nivelVolume(msg) {
  let alert = document.querySelector('#alert-box');
  alert.style.display = "block";
  document.querySelector('#msg').textContent = msg;
  alert.classList.add('fade-in');

  clearTimeout(timeout);
  clearTimeout(segTimeout);

  timeout = setTimeout(() => {
    alert.classList.remove('fade-in');
    alert.classList.add('fade-out');
    segTimeout = setTimeout(() => {
      alert.classList.remove('fade-out');
      alert.style.display = "none";
    }, 250)
  }, 3000)
}

function ativaCheckbox() {
  let btnAleatorio = document.querySelector('#icon-aleatorio');
  if (checkboxAleatorio.checked == false) { //Caso o aleatório não esteja ativo
    btnAleatorio.classList.add('enable');
    checkboxAleatorio.checked = true;
    // console.log("Modo aleatório ativo");
  } else { //Em caso do aleatório já estar ativo, ele é desativado
    btnAleatorio.classList.remove('enable');
    btnAleatorio.classList.add('disabled');
    checkboxAleatorio.checked = false;
    // console.log("Modo aleatório desativado");
  }
}

window.addEventListener('load', () => {
  checkboxAleatorio.checked = false;

  renderizarMusica(indexMusicaAtual, inicio = true);

  document.querySelector('.botao-play').style.display = 'block';
  document.querySelector('.botao-pause').style.display = 'none';


  document.querySelector('.botao-play').addEventListener('click', tocarMusica);
  document.querySelector('.botao-pause').addEventListener('click', pararMusica);
  botaoAnterior.addEventListener('click', musicaAnterior);
  botaoProxima.addEventListener('click', musicaProxima);

  audio.addEventListener('timeupdate', atualizarProgresso);
  barraProgresso.addEventListener('click', (e) => {
    let posicao = (e.offsetX / barraProgresso.clientWidth) * audio.duration;
    audio.currentTime = posicao;
    if (audio.paused) tocarMusica();
  });
});