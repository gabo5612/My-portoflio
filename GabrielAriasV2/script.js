const toggleTheme = document.getElementById("darkModeIcon");
const git=document.querySelector('#git');
const front=document.querySelector('#front');
const linked=document.querySelector('#linked');
const email=document.querySelector('#email');
const profile=document.querySelector('#profilePic')


    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("lightMode")
        if (document.body.classList.contains("lightMode")){
            toggleTheme.src='./assets/flash.svg' 
            toggleTheme.classList.remove('filter')
            git.classList.remove('filter')
            front.classList.remove('filter')
            linked.classList.remove('filter')
            email.classList.remove('filter')
            profile.classList.remove('filterImg')

        } else  {
            toggleTheme.src='./assets/flash-outline.svg' 
            toggleTheme.classList.add('filter')
            git.classList.add('filter')
            front.classList.add('filter')
            linked.classList.add('filter')
            email.classList.add('filter')
            profile.classList.add('filterImg')
           
        }
        
    })