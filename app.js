const adviceText = document.querySelector('.advice')
const adviceNumber = document.querySelector('.advice-number')
const btn = document.querySelector('.dice-container')

const changeAdvice = data => {
  const { advice, id } = data.slip
  adviceNumber.innerHTML = `advice #${id}`
  adviceText.innerHTML = advice
}

const requestAdvice = async () => {
  const res = await axios.get('https://api.adviceslip.com/advice')
  changeAdvice(res.data)
}

btn.addEventListener('click', requestAdvice)
