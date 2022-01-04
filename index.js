const D = document

function init() {
  const randomNum = Math.round(Math.random())
  if (randomNum === 0) {
    // Do Nothing
  } else {
    D.querySelector('img').src = './images/JACKAL_BLACK.png'
    D.documentElement.style.setProperty('--main-bg-color', '#F3EDD7')
    D.documentElement.style.setProperty('--main-text-color', 'black')

  }
}