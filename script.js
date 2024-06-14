const typpedTitle = document.querySelector('h1')

function typeWritter() {
  const letters = typpedTitle.textContent.split('')

  typpedTitle.textContent = ''

  letters.forEach((letter, index) => {
    setTimeout(() => {
      typpedTitle.textContent += letter
    }, index * 75)
  })
}

setTimeout(typeWritter, 300)
