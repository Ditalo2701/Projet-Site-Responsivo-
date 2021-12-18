
const btnHeader = document.querySelector('.navbar-hamburguer')
btnHeader = addEventListener('click', mude)

function mude() {
  const navHeader = document.querySelector('.nav-toggle')
  navHeader.classList.toggle('active')
  btnHeader.classList.toggle('active')

}
