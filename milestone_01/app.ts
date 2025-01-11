const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement
const experience = document.getElementById("work-experience") as HTMLElement

togglebutton.addEventListener('click', ()=> {
    if(experience.style.display === 'none') {
        experience.style.display = 'block'
    } 
    else {
        experience.style.display  = 'none'
    }
});