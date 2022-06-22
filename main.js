function playSound(idKey) {
  document.querySelector(idKey).play();
}

const listOfKeys = document.querySelectorAll('.tecla');

for (let i = 0; i < listOfKeys.length; i++) {
  const key = listOfKeys[i];
  let keyName = `#som_${key.classList[1]}`;

  key.onclick = () => playSound(keyName);
}
