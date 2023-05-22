console.log("Welcome To Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById()
let songs = [
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath: "covers/10.jpg"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused() || audioElement.currentTime<=0){
        audioElement.play();
    }
})

myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})


