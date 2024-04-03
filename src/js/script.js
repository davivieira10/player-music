const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const likeButton = document.getElementById("like");
const soundMuted = document.querySelector("#mutedsound");
const volumeSlider = document.querySelector(".volumeSlider");
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuffleButton = document.getElementById("shuffle");
const repeatButton = document.getElementById("repeat");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");
const buttonMsg = document.querySelector(".button-msg");

const wickedGame = {
  songName: "Wicked Game",
  artist: "Chris Isaak",
  cover: "wicked_game",
  file: "wicked_game",
  liked: false,
};

const unbreakMyHeart = {
  songName: "Unbreak My Heart",
  artist: "Toni Braxton",
  cover: "unbreak_my_heart",
  file: "unbreak_my_heart",
  liked: false,
};

const spanishGuitar = {
  songName: "Spanish Guitar",
  artist: "Toni Braxton",
  cover: "spanish_guitar",
  file: "spanish_guitar",
  liked: false,
};

const awayFromTheSun = {
  songName: "Away From The Sun",
  artist: "3 Doors Down",
  cover: "away_from_the_sun",
  file: "away_from_the_sun",
  liked: false,
};

const hereWithoutYou = {
  songName: "Here Without You",
  artist: "3 Doors Down",
  cover: "here_without_you",
  file: "here_without_you",
  liked: false,
};

const theReason = {
  songName: "The Reason",
  artist: "Hoobastank",
  cover: "the_reason",
  file: "the_reason",
  liked: false,
};

const always = {
  songName: "Always",
  artist: "Bon Jovi",
  cover: "always",
  file: "always",
  liked: false,
};

const myAll = {
  songName: "My All",
  artist: "Mariah Carey",
  cover: "my_all",
  file: "my_all",
  liked: false,
};

const thankYouForLovingMe = {
  songName: "Thank You For Loving Me",
  artist: "Bon Jovi",
  cover: "thank_you_for_loving_me",
  file: "thank_you_for_loving_me",
  liked: false,
};

const itWillRain = {
  songName: "It Will Rain",
  artist: "Bruno Mars",
  cover: "it_will_rain",
  file: "it_will_rain",
  liked: false,
};

const talkingToTheMoon = {
  songName: "Talking To The Moon",
  artist: "Bruno Mars",
  cover: "talking_to_the_moon",
  file: "talking_to_the_moon",
  liked: false,
};

const saveMeNow = {
  songName: "Save Me Now",
  artist: "Andru Donalds",
  cover: "save_me_now",
  file: "save_me_now",
  liked: false,
};

const heaven = {
  songName: "Heaven",
  artist: "Bryan Adams",
  cover: "heaven",
  file: "heaven",
  liked: false,
};

const pleaseForgiveMe = {
  songName: "Please Forgive Me",
  artist: "Bryan Adams",
  cover: "please_forgive_me",
  file: "please_forgive_me",
  liked: false,
};

const everythingIDo = {
  songName: "Everything I Do",
  artist: "Bryan Adams",
  cover: "everything_i_do",
  file: "everything_i_do",
  liked: false,
};

const allByMySelf = {
  songName: "All By Myself",
  artist: "Celine Dion",
  cover: "all_by_myself",
  file: "all_by_myself",
  liked: false,
};

const immortality = {
  songName: "Immortality",
  artist: "Celine Dion",
  cover: "immortality",
  file: "immortality",
  liked: false,
};

const lostInYourEyes = {
  songName: "Lost In Your Eyes",
  artist: "Debbie Gibson",
  cover: "lost_ in_your_eyes",
  file: "lost_ in_your_eyes",
  liked: false,
};

const carelessWhisper = {
  songName: "Careless Whisper",
  artist: "George Michael",
  cover: "careless_whisper",
  file: "careless_whisper",
  liked: false,
};

const saveMe = {
  songName: "Save Me",
  artist: "Hanson",
  cover: "save_me",
  file: "save_me",
  liked: false,
};

const sameMistake = {
  songName: "Same Mistake",
  artist: "James Blunt",
  cover: "same_mistake",
  file: "same_mistake",
  liked: false,
};

const iWillAlwaysLoveYou = {
  songName: "I Will Always Love You",
  artist: "Whitney Houston",
  cover: "i_will_always_love_you",
  file: "i_will_always_love_you",
  liked: false,
};

const iLookToYou = {
  songName: "I Look To You",
  artist: "Whitney Houston",
  cover: "i_look_to_you",
  file: "i_look_to_you",
  liked: false,
};

const untitled = {
  songName: "Untitled",
  artist: "Simple Plan",
  cover: "untitled",
  file: "untitled",
  liked: false,
};

const allOfMe = {
  songName: "All Of Me",
  artist: "John Legend",
  cover: "all_of_me",
  file: "all_of_me",
  liked: false,
};

const aThousandYears = {
  songName: "A Thousand Years",
  artist: "Christina Perri",
  cover: "a_thousand_years",
  file: "a_thousand_years",
  liked: false,
};

const insideUsAll = {
  songName: "Inside Us All",
  artist: "Creed",
  cover: "inside_us_all",
  file: "inside_us_all",
  liked: false,
};

const withArmsWideOpen = {
  songName: "With Arms Wide Open",
  artist: "Creed",
  cover: "with_arms_wide_open",
  file: "with_arms_wide_open",
  liked: false,
};

const oneLastBreath = {
  songName: "One Last Breath",
  artist: "Creed",
  cover: "one_last_breath",
  file: "one_last_breath",
  liked: false,
};

const rightHereWaiting = {
  songName: "Right Here Waiting",
  artist: "Richard Marx",
  cover: "right_here_waiting",
  file: "right_here_waiting",
  liked: false,
};

const theScientist = {
  songName: "The Scientist",
  artist: "Coldplay",
  cover: "the_scientist",
  file: "the_scientist",
  liked: false,
};

const whereverYouWillGo = {
  songName: "Wherever You Will Go",
  artist: "The Calling",
  cover: "wherever_you_will_go",
  file: "wherever_you_will_go",
  liked: false,
};

const farAway = {
  songName: "Far Away",
  artist: "Nickelback",
  cover: "far_away",
  file: "far_away",
  liked: false,
};

const angels = {
  songName: "Angels",
  artist: "Robbie Williams",
  cover: "angels",
  file: "angels",
  liked: false,
};

const fromThisMomentOn = {
  songName: "From This Moment On",
  artist: "Shania Twain",
  cover: "from_this_moment_on",
  file: "from_this_moment_on",
  liked: false,
};

//auxiliary variables
let isPlaying = false;
let isShuffled = false;
let repeatOn = false;
const originalplaylist = JSON.parse(localStorage.getItem("playlist")) ?? [
  wickedGame,
  unbreakMyHeart,
  spanishGuitar,
  awayFromTheSun,
  hereWithoutYou,
  theReason,
  always,
  myAll,
  thankYouForLovingMe,
  itWillRain,
  talkingToTheMoon,
  saveMeNow,
  heaven,
  pleaseForgiveMe,
  everythingIDo,
  allByMySelf,
  immortality,
  lostInYourEyes,
  carelessWhisper,
  saveMe,
  sameMistake,
  iWillAlwaysLoveYou,
  iLookToYou,
  untitled,
  allOfMe,
  aThousandYears,
  insideUsAll,
  withArmsWideOpen,
  oneLastBreath,
  rightHereWaiting,
  theScientist,
  whereverYouWillGo,
  farAway,
  angels,
  fromThisMomentOn,
];

let sortedPlaylist = [...originalplaylist];
let index = 0;

//functions
function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle-fill");
  play.querySelector(".bi").classList.add("bi-pause-circle-fill");
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector(".bi").classList.add("bi-play-circle-fill");
  play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function likeButtonRender() {
  if (sortedPlaylist[index].liked === true) {
    likeButton.querySelector(".bi").classList.remove("bi-heart");
    likeButton.querySelector(".bi").classList.add("bi-heart-fill");
    likeButton.classList.add("button-active");
  } else {
    likeButton.querySelector(".bi").classList.add("bi-heart");
    likeButton.querySelector(".bi").classList.remove("bi-heart-fill");
    likeButton.classList.remove("button-active");
  }
}

function initializeSong() {
  cover.src = `src/images/${sortedPlaylist[index].cover}.jpg`;
  song.src = `src/songs/${sortedPlaylist[index].file}.mp3`;
  songName.innerText = sortedPlaylist[index].songName;
  bandName.innerText = sortedPlaylist[index].artist;
  likeButtonRender();
}

function previousSong() {
  if (index === 0) {
    index = sortedPlaylist.length - 1;
  } else {
    index -= 1;
  }
  initializeSong();
  playSong();
}

function nextSong() {
  if (index === sortedPlaylist.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  initializeSong();
  playSong();
}

function updateProgress() {
  const barWidth = (song.currentTime / song.duration) * 100;
  currentProgress.style.setProperty("--progress", `${barWidth}%`);
  songTime.innerText = toHHMMSS(song.currentTime);
}

function jumpTo(event) {
  const width = progressContainer.clientWidth;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition / width) * song.duration;
  song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray) {
  const size = preShuffleArray.length;
  let currentIndex = size - 1;
  while (currentIndex > 0) {
    let randomIndex = Math.floor(Math.random() * size);
    let aux = preShuffleArray[currentIndex];
    preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
    preShuffleArray[randomIndex] = aux;
    currentIndex -= 1;
  }
}

function shuffleButtonClicked() {
  if (isShuffled === false) {
    isShuffled = true;
    shuffleArray(sortedPlaylist);
    shuffleButton.classList.add("button-active");
  } else {
    isShuffled = false;
    sortedPlaylist = [...originalplaylist];
    shuffleButton.classList.remove("button-active");
  }
}

function repeatButtonClicked() {
  if (repeatOn === false) {
    repeatOn = true;
    repeatButton.classList.add("button-active");
  } else {
    repeatOn = false;
    repeatButton.classList.remove("button-active");
  }
}

function nextOrRepeat() {
  if (repeatOn === false) {
    nextSong();
  } else {
    playSong();
  }
}

function toHHMMSS(originalNumber) {
  let hours = Math.floor(originalNumber / 3600); //1 hora tem 3600 segundos
  let min = Math.floor((originalNumber - hours * 3600) / 60); //60 segundos = 1 minuto
  let secs = Math.floor(originalNumber - hours * 3600 - min * 60);

  return `${hours.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function updateTotalTime() {
  totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonClicked() {
  if (sortedPlaylist[index].liked === false) {
    sortedPlaylist[index].liked = true;
  } else {
    sortedPlaylist[index].liked = false;
  }
  likeButtonRender();
  localStorage.setItem("playlist", JSON.stringify(originalplaylist));
}

initializeSong();

function setVolume() {
  song.volume = volumeSlider.value / 100;
}

function mutedSound() {
  if(song.muted) {
    song.muted = false;
    soundMuted.classList.add("bi-volume-off");
    soundMuted.classList.remove("bi-volume-mute");
  } else {
    song.muted = true;
    soundMuted.classList.remove("bi-volume-off");
    soundMuted.classList.add("bi-volume-mute");
  }
}

//Events
play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
song.addEventListener("timeupdate", updateProgress);
song.addEventListener("ended", nextOrRepeat);
song.addEventListener("loadedmetadata", updateTotalTime);
progressContainer.addEventListener("click", jumpTo);
shuffleButton.addEventListener("click", shuffleButtonClicked);
repeatButton.addEventListener("click", repeatButtonClicked);
likeButton.addEventListener("click", likeButtonClicked);
soundMuted.addEventListener("click", mutedSound);
volumeSlider.addEventListener("change", setVolume);






