
const navMenu = document.getElementById('nav-menu'),
      navMudarCor = document.getElementById('nav-mudarCor'),
      navClose = document.getElementById('nav-close')

      if(navMudarCor){
        navMudarCor.addEventListener('click', () =>{
            navMenu.classList.add('exibir-menu')
        })
      }
      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('exibir-menu')
        })
      }