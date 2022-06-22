function playSound(AudioSelector) {
  const element = document.querySelector(AudioSelector);

  if (element && element.localName === 'audio')
    element.play()
  else
    console.log("Element invalid")
}

const listOfKeys = document.querySelectorAll('.tecla');

for (let i = 0; i < listOfKeys.length; i++) {
  const key = listOfKeys[i];
  let keyName = `#som_${key.classList[1]}`;

  key.onclick = () => playSound(keyName);

  key.onkeydown = (event) => event.code === 'Enter' ? key.classList.add('ativa') : null;

  key.onkeyup = () => key.classList.remove('ativa');
}
