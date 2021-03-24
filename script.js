// Global Constants
const cluePauseTime = 75; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

//Global Variables
//creates a random pattern for the game every time browser is refreshed
var pattern = createPattern();
var progress = 0;
var attempt = 0;
var gamePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1300; //how long to hold each clue's light/sound

//starts game upon mouse click on the "Start button"
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

//stops game upon mouse click on the "End" button
function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 250.6,
  2: 320.6,
  3: 370.4,
  4: 450.2,
  5: 520.4,
  6: 570.5
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//lights button upon mouse hold
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
//removes light on button once mouse is no longer held
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//plays a single clue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//plays the entire clue sequence
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    //Will execute if index is not 0; shortens the play time of each clue progressively over each round
    if (i != 0) {
      clueHoldTime = clueHoldTime - 100;
    }
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//executes if player loses game
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
//executes if player wins game
function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

//executes upon a mouse click on a button
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      //user is correct so far, keeps going
      guessCounter++;
    }
  } else {
    //user guessed the wrong button, will be able to guess again until they reach 3 failed attempts
    attempt++;
    if (attempt != 3) {
      alert("Wrong Guess. Try Again.");
      playClueSequence();
    } else {
      loseGame();
    }
  }
}

//user-implemented function to create a random pattern each time the game is played.
function createPattern() {
  const ARRAY_LENGTH = 5;
  const pattern = [];
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    pattern.push(Math.floor(Math.random() * 6) + 1);
  }
  return pattern;
}
