const container  = document.getElementById('js_container')
const showButton = document.getElementById('js_show-navigation')
const hideButton = document.getElementById('js_hide-navigation')

showButton.addEventListener('click', () => container.classList.add('--is-flipped'))
hideButton.addEventListener('click', () => container.classList.remove('--is-flipped'))