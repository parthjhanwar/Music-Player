const play = document.getElementById("play");
const audio = document.querySelector("audio");
const img = document.querySelector("img")
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("songNameHeading");
const artist = document.getElementById("artistNameHeading");


const musicList = [
    {
        imgPath : "images/1.jpg",
        musicPath : "musics/1.mp3",
        songName : "Blue Eyes",
        artistName : "Honey Singh"
    },
    {
        imgPath : "images/2.jpg",
        musicPath : "musics/2.mp3",
        songName : "Tu Aake Dekhle",
        artistName : "King"
    },
    {
        imgPath : "images/3.jpg",
        musicPath : "musics/3.mp3",
        songName : "Tera Hone Laga Hoo",
        artistName : "Atif Aslam"
    },
    {
        imgPath : "images/4.jpg",
        musicPath : "musics/4.mp3",
        songName : "Night Changes",
        artistName : "One Direction"
    },
    {
        imgPath : "images/5.jpg",
        musicPath : "musics/5.mp3",
        songName : "Chidiya",
        artistName : "Vilen"
    },
    {
        imgPath : "images/6.jpg",
        musmusicPathic : "musics/6.mp3",
        songName : "Friends",
        artistName : "Anne Marie"
    },
    {
        imgPath : "images/7.jpg",
        musicPath : "musics/7.mp3",
        songName : "Despacito",
        artistName : "Luis Fonsi & Daddy Yankee"
    },
    {
        imgPath : "images/8.jpg",
        musicPath : "musics/8.mp3",
        songName : "Chammak Challo",
        artistName : "Akon"
    },
    {
        imgPath : "images/9.jpg",
        musicPath : "musics/9.mp3",
        songName : "Soch",
        artistName : "Hardy Sandhu"
    },
    {
        imgPath : "images/10.jpg",
        musicPath : "musics/10.mp3",
        songName : "Hey Mama",
        artistName : "David Guetta"
    },
    {
        imgPath : "images/11.jpg",
        musicPath : "musics/11.mp3",
        songName : "Closer",
        artistName : "The Chainsmokers"
    },
    {
        imgPath : "images/12.jpg",
        musicPath : "musics/12.mp3",
        songName : "Therefore I Am",
        artistName : "Billie Eilish"
    },
    {
        imgPath : "images/13.jpg",
        musicPath : "musics/13.mp3",
        songName : "Sun Raha Hai Na Tu",
        artistName : "Arijit Singh"
    },
    {
        imgPath : "images/14.jpg",
        musicPath : "musics/14.mp3",
        songName : "Havana",
        artistName : "Camila Cabello"
    },
    {
        imgPath : "images/15.jpg",
        musicPath : "musics/15.mp3",
        songName : "Bhagwan Hai Kaha Re Tu",
        artistName : "Sonu Nigam"
    },
    {
        imgPath : "images/16.jpg",
        musicPath : "musics/16.mp3",
        songName : "Why This Kolaveri Di",
        artistName : "Dhanush"
    },
    {
        imgPath : "images/17.jpg",
        musicPath : "musics/17.mp3",
        songName : "Bhar Do Jholi",
        artistName : "Adnan Sami"
    },
    {
        imgPath : "images/18.jpg",
        musicPath : "musics/18.mp3",
        songName : "I'm Albatroz",
        artistName : "Aron Chupa"
    },
    {
        imgPath : "images/19.jpg",
        musicPath : "musics/19.mp3",
        songName : "Senorita",
        artistName : "Shawn Mendes & Camila Cabello"
    },
    {
        imgPath : "images/20.jpg",
        musicPath : "musics/20.mp3",
        songName : "Raabta",
        artistName : "Arijit Singh"
    }
]

// declaring variable to keep track and adding event listner on the play button
let isplaying = false;
play.addEventListener("click" , () => {
    // calling FUNCTIONS accordingly
    isplaying ? pauseAudio() : playAudio();
});

// music PLAY function
const playAudio = () =>{
    isplaying = true;
    audio.play();
    play.classList.replace("fa-play" , "fa-pause");
    img.classList.add("animationEffect")
}

// music PAUSE function
const pauseAudio = () =>{
    isplaying = false;
    audio.pause();
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.remove("animationEffect")
}

// load Songs function
const loadSongs = (musicList) =>{
    title.innerHTML = musicList.songName;
    artist.innerHTML = musicList.artistName;
    audio.src = musicList.musicPath;
    img.src = musicList.imgPath;
}

let songIndex = 0;
const prevSong = () =>{
    songIndex = (songIndex - 1 + musicList.length) % musicList.length;
    loadSongs(musicList[songIndex]);
    playAudio();
}
const nextSong = () =>{
    songIndex = (songIndex + 1) % musicList.length;
    loadSongs(musicList[songIndex]);
    playAudio();
}

prev.addEventListener('click' , prevSong);
next.addEventListener('click' , nextSong);