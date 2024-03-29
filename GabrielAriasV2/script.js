const toggleTheme = document.getElementById("darkModeIcon");
const git = document.querySelector(".git");
const front = document.querySelector(".front");
const linked = document.querySelector(".linked");
const email = document.querySelector(".email");
const git2 = document.querySelector(".git2");
const front2 = document.querySelector(".front2");
const linked2 = document.querySelector(".linked2");
const email2 = document.querySelector(".email2");
const profile = document.querySelector("#profilePic");
const github = document.querySelector("#github");
const wordpress = document.querySelector("#wordpress");
const productCard = document.querySelector("#productCard");
const landingPage = document.querySelector("#landingPage");
const tipCalculator = document.querySelector("#tipCalculator");
const iphoneCalculator = document.querySelector("#iphoneCalculator");
const sunnySide = document.querySelector("#sunnySide");
const ipLocation = document.querySelector("#ipLocation");
const resultSumary = document.querySelector("#resultSumary");
const spaceTourism = document.querySelector("#spaceTourism");
const newsHomePage = document.querySelector("#newsHomePage");
const jobListing=document.querySelector("#jobListing")
const nextJs=document.querySelector('#nextJs');
lazyload();

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("lightMode");
  if (document.body.classList.contains("lightMode")) {
    toggleTheme.src = "./assets/dark_mode.svg";
    toggleTheme.classList.remove("filter");
    git.classList.remove("filter");
    front.classList.remove("filter");
    linked.classList.remove("filter");
    email.classList.remove("filter");
    git2.classList.remove("filter");
    front2.classList.remove("filter");
    linked2.classList.remove("filter");
    email2.classList.remove("filter");
    profile.classList.remove("filterImg");
    github.style.filter = "none";
    wordpress.style.filter = "none";
    nextJs.style.filter="none";
  } else {
    toggleTheme.src = "./assets/light_mode.svg";
    toggleTheme.classList.add("filter");
    git.classList.add("filter");
    front.classList.add("filter");
    linked.classList.add("filter");
    email.classList.add("filter");
    git2.classList.add("filter");
    front2.classList.add("filter");
    linked2.classList.add("filter");
    email2.classList.add("filter");
    profile.classList.add("filterImg");
    github.style.filter = "invert(1)";
    wordpress.style.filter = "invert(1)";
    nextJs.style.filter="invert(1)";
  }
});

var splide = new Splide(".splide", {
  type: "fade",
  rewind: true,
});


splide.mount();



window.addEventListener("load", function() {

  
  var newWidth = window.innerWidth;
 
  if (newWidth > 1000) {
    productCard.src = "./assets/productCardDesktop.PNG";
    landingPage.src='./assets/landing page desktop.PNG'
    tipCalculator.src='./assets/tipCalculatorDesktop.PNG'
    iphoneCalculator.src='./assets/IphoneCalculatorDektop.PNG'
    sunnySide.src='./assets/SunnysideDesktop.PNG'
    ipLocation.src='./assets/IPAddressLocationDesktop.PNG'
    resultSumary.src='./assets/ResultSumaryDesktop.PNG'
    spaceTourism.src='./assets/SpacetourismDesktop.PNG'
    newsHomePage.src='./assets/NewsWebsiteDesktop.PNG'
    jobListing.src='./assets/jobLisintDesktop.PNG'

  } else {
    productCard.src = "./assets/productCardMobile.PNG";
    landingPage.src='./assets/landing page mobile.PNG'
    tipCalculator.src='./assets/tipCalculatorMobile.PNG'
    iphoneCalculator.src='./assets/IphoneCalculatorMobile.PNG'
    sunnySide.src='./assets/SunnysideMobile.PNG'
    ipLocation.src='./assets/IPAddressLocationMobile.PNG'
    resultSumary.src='./assets/ResultSumaryMobile.PNG'
    spaceTourism.src='./assets/SpacetourismMobile.PNG'
    newsHomePage.src='./assets/NewsWebsiteMobile.PNG'
    jobListing.src='./assets/JobListingMobile.PNG'
  }

});
window.addEventListener('resize', function(){
  var newWidth = window.innerWidth;
 
  if (newWidth > 1000) {
    productCard.src = "./assets/productCardDesktop.PNG";
    landingPage.src='./assets/landing page desktop.PNG'
    tipCalculator.src='./assets/tipCalculatorDesktop.PNG'
    iphoneCalculator.src='./assets/IphoneCalculatorDektop.PNG'
    sunnySide.src='./assets/SunnysideDesktop.PNG'
    ipLocation.src='./assets/IPAddressLocationDesktop.PNG'
    resultSumary.src='./assets/ResultSumaryDesktop.PNG'
    spaceTourism.src='./assets/SpacetourismDesktop.PNG'
    newsHomePage.src='./assets/NewsWebsiteDesktop.PNG'
    jobListing.src='./assets/jobLisintDesktop.PNG'

  } else {
    productCard.src = "./assets/productCardMobile.PNG";
    landingPage.src='./assets/landing page mobile.PNG'
    tipCalculator.src='./assets/tipCalculatorMobile.PNG'
    iphoneCalculator.src='./assets/IphoneCalculatorMobile.PNG'
    sunnySide.src='./assets/SunnysideMobile.PNG'
    ipLocation.src='./assets/IPAddressLocationMobile.PNG'
    resultSumary.src='./assets/ResultSumaryMobile.PNG'
    spaceTourism.src='./assets/SpacetourismMobile.PNG'
    newsHomePage.src='./assets/NewsWebsiteMobile.PNG'
    jobListing.src='./assets/JobListingMobile.PNG'
  }
})