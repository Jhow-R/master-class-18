// Get all keys
const keys = document.querySelectorAll(".key")

// Add mouse and keybord events
window.addEventListener("load", registerEvents())

function registerEvents() {
  
  // Mouse click
  keys.forEach((key) => {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
  });

  // Keyboard type
  window.addEventListener("keydown", playNote);
}

function playNote(event) {

  let audioKeyCode = getKeyCode(event);

  // Get typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  // If key doesn't exist
  const isKeyExists = key;
  if (!isKeyExists) {
    return;
  }
  addPlayingClass(key);
  playAudio(audioKeyCode);
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function addPlayingClass(key) {
  key.classList.add("playing");
}

function removePlayingClass(event){
  event.target.classList.remove("playing")
}

function getKeyCode(event) {
  let keyCode;
  let isKeyboard = event.type === "keydown";
  if (isKeyboard) {
    keyCode = event.keyCode;
  }
  else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}
