const img1=document.querySelector('.img1');
const imgd2=document.querySelector('.imgd2');
const icon=document.querySelector('.icon');
const container=document.querySelector('.container')


img1.addEventListener('mouseover', inactiveoff);
img1.addEventListener('mouseleave', inactiveon);

function inactiveoff(){
   
    imgd2.classList.remove('inactive');
    icon.classList.remove('inactive');
    console.log('1');
}
function inactiveon(){
    imgd2.classList.add('inactive');
    icon.classList.add('inactive');
    console.log('2');
}