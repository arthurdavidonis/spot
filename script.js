const songName = document.getElementById('song-name');
const artistType = document.getElementById('artist-name');
const song = document.getElementById('audio');
const tocar = document.getElementById('play');
const cover  = document.getElementById("capa-album");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const progressBar = document.getElementById("current-progress");


let estaTocando = true;


const drakeSong ={
    songName: "Chicago Freestyle",
    artist: "Drake",
    file: "chicago",
}

const veighSong ={
    songName : "Bandana 2",
    artist: "Veigh",
    file: "veigh",
}


const quavoWhere = {
    songName : "Where Can I Start",
    artist: "Quavo",
    file: "quavo",
}

const poloG = {
    songName : "Rapstar",
    artist: "Polo G",
    file: "polog",

}


const playlist = [drakeSong , veighSong , quavoWhere , poloG];
let index = 0;

function playSong(){
    tocar.querySelector('.bi').classList.remove('bi-play-circle-fill');
    tocar.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    estaTocando = true;
    
}

function pauseSong(){
    tocar.querySelector('.bi').classList.add('bi-play-circle-fill');
    tocar.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    estaTocando = false;
    
    
}

function playPauseVerif(){
    if(estaTocando === true){
        pauseSong();
    }
    else{
        playSong();
    }
}

function initializeSong(){
    cover.src = `imagens/${playlist[index].file}.jpg`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    artistType.innerText = playlist[index].artist;
}


function previousSong(){
    if(index === 0){
        index = playlist.length -1;

    }
    else{
        index -=1;

    }
    initializeSong();
    playSong();
}



function nextSong(){
    if(index === playlist.length -1){
        index = 0;

    }
    else{
        index +=1;

    }
    initializeSong();
    playSong();
}

function uptadeProgressBar(){
    const barWidth =  (song.currentTime / song.duration) *100;
    progressBar.style.setProperty('--progress', `${barWidth}%`);
}



initializeSong();
tocar.addEventListener('click', playPauseVerif);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', uptadeProgressBar);



