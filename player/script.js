document.addEventListener('DOMContentLoaded', function() {
    // Player elements
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const volumeSlider = document.getElementById('volume-slider');
    const playlistEl = document.getElementById('playlist');
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const albumArtEl = document.getElementById('album-art');
    
    // Playlist data
    const playlist = [
        {
            "title": "Aerials",
            "artist": "System Of A Down",
            "src": "music/System of a Down - Aerials (Remastered 2021).mp3",
            "cover": "covers/aerials.jpg"
        },
        {
            "title": "Afterlife (from the Netflix Series \"Devil May Cry\")",
            "artist": "Evanescence",
            "src": "music/Evanescence _ Afterlife _ Devil May Cry _ Official Soundtrack _ Netflix.mp3",
            "cover": "covers/AfterLife.jpg"
        },
        {
            "title": "Altars of Apostasy",
            "artist": "Heaven Pierce Her",
            "src": "music/ULTRAKILL OST - Altars of Apostasy.mp3",
            "cover": "covers/altarsofapostasy.jpg"
        },
        {
            "title": "Amoeba",
            "artist": "Adolescents",
            "src": "music/Amoeba.mp3",
            "cover": "covers/amoeba.jpg"
        },
        {
            "title": "Beautiful Princess Disorder",
            "artist": "milkypossum",
            "src": "music/Beautiful Princess Disorder - 「THE NEET EP」.mp3",
            "cover": "covers/beautifulprincessdissorder.jpg"
        },
        {
            "title": "Belly Up",
            "artist": "Return to Dust",
            "src": "music/Belly Up.mp3",
            "cover": "covers/bellyup.jpg"
        },
        {
            "title": "Besдна",
            "artist": "Чернобыль",
            "src": "music/besdna.mp3",
            "cover": "covers/besdna.jpg"
        },
        {
            "title": "Bring Me To Life",
            "artist": "Evanescence",
            "src": "music/Bring Me To Life.mp3",
            "cover": "covers/bringmetolife.jpg"
        },
        {
            "title": "Bullet With Butterfly Wings - Remaster 2012",
            "artist": "The Smashing Pumpkins",
            "src": "music/The Smashing Pumpkins - Bullet With Butterfly Wings.mp3",
            "cover": "covers/bulletwithbutterflywings.jpg"
        },
        {
            "title": "Chivo Expiatorio",
            "artist": "El Cuarteto De Nos",
            "src": "music/Chivo Expiatorio.mp3",
            "cover": "covers/chivoexpiatorio.jpg"
        },
        {
            "title": "Dazed and Confused - 1990 Remaster",
            "artist": "Led Zeppelin",
            "src": "music/Dazed and Confused (Remaster).mp3",
            "cover": "covers/dazedandconfused.jpg"
        },
        {
            "title": "\"DEVILS NEVER CRY\"(スタッフロール)",
            "artist": "Capcom Sound Team",
            "src": "music/Devil May Cry 3 - Devils Never Cry.mp3",
            "cover": "covers/devilsnevercry.jpg"
        },
        {
            "title": "Fallen Angel feat. Aimee B",
            "artist": "Mitsunori Ikeda, Aimee B",
            "src": "music/Fallen Angel feat. Aimee B.mp3",
            "cover": "covers/fallenangel.jpg"
        },
        {
            "title": "For Whom The Bell Tolls",
            "artist": "Apocalyptica",
            "src": "music/For Whom The Bell Tolls.mp3",
            "cover": "covers/forwhomthebelltolls.jpg"
        },
        {
            "title": "Get in the Water",
            "artist": "Jorge Rivera-Herrans",
            "src": "music/Get in the Water.mp3",
            "cover": "covers/getinthewater.jpg"
        },
        {
            "title": "Highこそギャル～初夏ver.～花冷え。",
            "artist": "HANABIE.",
            "src": "music/hanabie.mp3",
            "cover": "covers/hanabie.jpg"
        },
        {
            "title": "Highway Song",
            "artist": "System Of A Down",
            "src": "music/Highway Song.mp3",
            "cover": "covers/toxicity.jpg" 
        },
        {
            "title": "I (Heart) You",
            "artist": "KMFDM",
            "src": "music/I (Heart) You.mp3",
            "cover": "covers/iheartyou.jpg"
        },
        {
            "title": "It's Not a Fashion Statement, It's a deathwish",
            "artist": "My Chemical Romance",
            "src": "music/It's Not a Fashion Statement, It's a Deathwish.mp3",
            "cover": "covers/tcfsr.jpg" 
        },
        {
            "title": "Kingslayer (feat. BABYMETAL)",
            "artist": "Bring Me The Horizon, BABYMETAL",
            "src": "",
            "cover": "covers/kingslayer.jpg"
        },
        {
            "title": "Laplace's Angel (Hurt People? Hurt People!)",
            "artist": "Will Wood",
            "src": "",
            "cover": "covers/laplacesangel.jpg"
        },
        {
            "title": "Lay Down",
            "artist": "Priestess",
            "src": "",
            "cover": "covers/laydown.jpg"
        },
        {
            "title": "Loki Theme",
            "artist": "Megaraptor",
            "src": "",
            "cover": "covers/lokitheme.jpg"
        },
        {
            "title": "Love From The Other Side",
            "artist": "Fall Out Boy",
            "src": "",
            "cover": "covers/lovefromtheotherside.jpg"
        },
        {
            "title": "Nightmare",
            "artist": "Set It Off",
            "src": "",
            "cover": "covers/nightmate.jpg"
        },
        {
            "title": "Odysseus",
            "artist": "Jorge Rivera-Herrans",
            "src": "",
            "cover": "covers/stealthisalbum.png"
        },
        {
            "title": "Panic Attack - 2009 Remaster",
            "artist": "Dream Theater",
            "src": "",
            "cover": "covers/panickattack.jpg" 
        },
        {
            "title": "Question!",
            "artist": "System Of A Down",
            "src": "",
            "cover": "covers/question.jpg"
        },
        {
            "title": "Remember My Name",
            "artist": "Mitski",
            "src": "",
            "cover": "covers/remmembermyname.jpg"
        },
        {
            "title": "Tenebre Rosso Sangue (ULTRAKILL original Game Soundtrack)",
            "artist": "Keygen Church",
            "src": "",
            "cover": "covers/tenebrerossosangue.jpg"
        },
        {
            "title": "Toxicity",
            "artist": "System Of A Down",
            "src": "",
            "cover": "covers/toxicity.jpg"
        },
        {
            "title": "Trainwreck Murmurs",
            "artist": "Mina Lord",
            "src": "",
            "cover": "covers/TrainwreckMurmurs.jpg"
        },
        {
            "title": "Violent Pornography",
            "artist": "System Of A Down",
            "src": "",
            "cover": "covers/violentpornography.jpg"
        }
    ];
    
    let currentSongIndex = 0;
    let isPlaying = false;
    
    // Initialize player
    function initPlayer() {
        renderPlaylist();
        loadSong(currentSongIndex);
        
        // Set initial volume
        audioPlayer.volume = volumeSlider.value;
    }
    
    // Render playlist
    function renderPlaylist() {
        playlistEl.innerHTML = '';
        
        playlist.forEach((song, index) => {
            const playlistItem = document.createElement('div');
            playlistItem.classList.add('playlist-item');
            if (index === currentSongIndex) {
                playlistItem.classList.add('active');
            }
            
            playlistItem.innerHTML = `
                <img src="${song.cover}" alt="${song.title}">
                <div class="playlist-song-info">
                    <div class="playlist-song-title">${song.title}</div>
                    <div class="playlist-song-artist">${song.artist}</div>
                </div>
            `;
            
            playlistItem.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                playSong();
                updateActivePlaylistItem();
            });
            
            playlistEl.appendChild(playlistItem);
        });
    }
    
    // Update active playlist item
    function updateActivePlaylistItem() {
        const playlistItems = document.querySelectorAll('.playlist-item');
        playlistItems.forEach((item, index) => {
            if (index === currentSongIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // Load song
    function loadSong(index) {
        const song = playlist[index];
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        albumArtEl.src = song.cover;
        audioPlayer.src = song.src;
    }
    
    // Play song
    function playSong() {
        isPlaying = true;
        playBtn.textContent = '⏸';
        audioPlayer.play();
    }
    
    // Pause song
    function pauseSong() {
        isPlaying = false;
        playBtn.textContent = '▶';
        audioPlayer.pause();
    }
    
    // Previous song
    function prevSong() {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = playlist.length - 1;
        }
        loadSong(currentSongIndex);
        playSong();
        updateActivePlaylistItem();
    }
    
    // Next song
    function nextSong() {
        currentSongIndex++;
        if (currentSongIndex > playlist.length - 1) {
            currentSongIndex = 0;
        }
        loadSong(currentSongIndex);
        playSong();
        updateActivePlaylistItem();
    }
    
    // Update progress bar
    function updateProgress(e) {
        if (isPlaying) {
            const { duration, currentTime } = e.srcElement;
            const progressPercent = (currentTime / duration) * 100;
            progress.style.width = `${progressPercent}%`;
            
            // Update time
            const durationMinutes = Math.floor(duration / 60);
            let durationSeconds = Math.floor(duration % 60);
            if (durationSeconds < 10) {
                durationSeconds = `0${durationSeconds}`;
            }
            
            // Delay switching duration to avoid NaN
            if (durationSeconds) {
                durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
            }
            
            const currentMinutes = Math.floor(currentTime / 60);
            let currentSeconds = Math.floor(currentTime % 60);
            if (currentSeconds < 10) {
                currentSeconds = `0${currentSeconds}`;
            }
            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
        }
    }
    
    // Set progress
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    }
    
    // Event listeners
    playBtn.addEventListener('click', () => {
        isPlaying ? pauseSong() : playSong();
    });
    
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', nextSong);
    
    progressBar.addEventListener('click', setProgress);
    
    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value;
    });
    
    // Initialize player
    initPlayer();
});
