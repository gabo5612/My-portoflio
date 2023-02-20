const menuMobile=document.querySelector('.mobile');
const hmMenu=document.querySelector('#hamburger');
const frontPage=document.querySelector('.frontPage');
const milk=document.querySelector('.milk');
const orange=document.querySelector('.orange');
const cone=document.querySelector('.cone');
const cubes=document.querySelector('.cubes');
hmMenu.addEventListener('click',function(){
    menuMobile.classList.toggle('inactive')
    
})
/*
function imgDesktopAdd(){
    milk.src="./images/desktop/image-gallery-milkbottles.jpg"
    orange.src="./images/desktop/image-gallery-orange.jpg"
    cone.src="./images/desktop/image-gallery-cone.jpg"
    cubes.src="./images/desktop/image-gallery-sugarcubes.jpg"
    
  }
  function imgDesktopRemove(){
    orange.src="./images/mobile/image-gallery-orange.jpg"
    milk.src="./images/mobile/image-gallery-milkbottles.jpg"
    cone.src="./images/mobile/image-gallery-cone.jpg"
    cubes.src="./images/mobile/image-gallery-sugar-cubes.jpg"
  }
  
  var mediaqueryList = window.matchMedia("(min-width: 1440px)");
  mediaqueryList.addListener( function() {
    if(mediaqueryList.matches) {
        imgDesktopAdd()
        
    } else{
        imgDesktopRemove()
    }
    
  });
  
  */