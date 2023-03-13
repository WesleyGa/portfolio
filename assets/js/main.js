/*===== MENU SHOW =====*/ 
const abrirMenu = (trocarId, navId) =>{
  const trocar = document.getElementById(trocarId),
  nav = document.getElementById(navId)

  if(trocar && nav){
      trocar.addEventListener('click', ()=>{
          nav.classList.trocar('abrir')
      })
  }
}
abrirMenu('nav-trocar','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('abrir')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('secao[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const secaoHeight = current.offsetHeight
      const secaoTop = current.offsetTop - 50;
      secaoId = current.getAttribute('id')

      if(scrollY > secaoTop && scrollY <= secaoTop + secaoHeight){
          document.querySelector('.nav_menu a[href*=' + secaoId + ']').classList.add('active')
      }else{
          document.querySelector('.nav_menu a[href*=' + secaoId + ']').classList.remove('active')
      }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 300,
  delay: 300,
//     reset: true
});

sr.reveal('.home_data, .sobremim_img, .skills_subtitulo, .skills_text',{}); 
sr.reveal('.home_img, .sobremim_subtitulo, .sobremim_text, .skills_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 
sr.reveal('.skills_data, .contato_input',{interval: 200}); 