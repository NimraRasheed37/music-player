//Songs list
const songs = [
    {
        title: 'Open Eyes (16 wishes)',
        artist: 'Debby Ryan',
        src: '/Music/motivational/open eyes/Open Eyes- Debby Ryan.mp3',
        cover: '/Music/motivational/open eyes/Open eyes - pp.jpg'
    },
    {
        title: 'Come Alive',
        artist: 'Hugh Jackman',
        src: '/Music/motivational/come-alive/the-greatest-showman-come-alive.mp3',
        cover: 'Music/motivational/come-alive/come alive --.jpg'
    },
    {
        title: 'Speechless (Alladin)',
        artist: 'Naomi Scott',
        src: 'Music/motivational/speechless/speechless-naomi-scott-official-audio.mp3',
        cover: 'Music/motivational/speechless/speechless-pp.jpg'
    },
    {
        title: 'Ek Thi Mariam',
        artist: 'Zeb Bangash',
        src: 'Music/motivational/ek thi mariam/ek-thi-marium-ost-by-zeb-bangash-urdu1.mp3',
        cover: 'Music/motivational/ek thi mariam/ek-thi-marium-pp.jpg'
    },
    {
        title: 'Start Over (Itaewon Class)',
        artist: 'Gaho',
        src: 'Music/Korean/Itaewon class/가호 (Gaho) - 시작 (Start Over) [이태원 클라쓰 - Itaewon Class OST Part 2].mp3',
        cover: 'Music/Korean/Itaewon class/Itaewon class-pp.webp'
    },
    {
        title: 'Teri Dastan (Hichki)',
        artist: 'Jasleen Royal',
        src: 'Music/motivational/teri dastaan/teri-dastaan-hickhki-jasleen-royal-320kbps.mp3',
        cover: 'Music/motivational/teri dastaan/teri dastan-pp.jpg'
    },
    {
        title: 'Dheeme Dheeme (Laapata Ladies)',
        artist: 'Shreya Ghoshal',
        src: 'Music/motivational/Dheme dheme/Dheeme-Dheeme-Full-Video-Laapataa-Ladies_70.mp3',
        cover: 'Music/motivational/Dheme dheme/lapata ladies.jpg'
    },
];
let songIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songName = document.getElementById('song-name');
const artistName = document.getElementById('artist-name');
const artistPic = document.getElementById('artist-pic');
const audioSource = document.getElementById('audioSource');
const songListToggle = document.getElementById('songListToggle');
const songList = document.getElementById('song-list');
const songListContainer = document.getElementById('songListContainer');
const mainDiv = document.querySelector('.main-div'); // Add the playing class to main-div

// Play song and add animation
function playSong() {
    audioPlayer.play();
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
    mainDiv.classList.add('playing'); // Add 'playing' class to trigger animation
}

// Pause song and remove animation
function pauseSong() {
    audioPlayer.pause();
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
    mainDiv.classList.remove('playing'); // Remove 'playing' class to stop animation
}

// Load song
function loadSong(song) {
    songName.textContent = song.title;
    artistName.textContent = song.artist;
    artistPic.src = song.cover;
    audioSource.src = song.src;
    audioPlayer.load();
}

// Toggle play/pause
playPauseBtn.addEventListener('click', () => {
    const isPlaying = !audioPlayer.paused;
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Previous song
prevBtn.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
});

// Next song
nextBtn.addEventListener('click', () => {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
});

// Load the initial song
loadSong(songs[songIndex]);

// Toggle song list visibility
songListToggle.addEventListener('click', () => {
    songList.classList.toggle('hidden');
});

// Populate song list and allow clicking to select and play song
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener('click', () => {
        songIndex = index;
        loadSong(songs[songIndex]);
        playSong();
        songList.classList.add('hidden'); // Hide the list after selecting the song
    });
    songListContainer.appendChild(li);
});
