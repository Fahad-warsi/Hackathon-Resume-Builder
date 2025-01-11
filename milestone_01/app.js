var togglebutton = document.getElementById('toggle-skills');
var experience = document.getElementById("work-experience");
togglebutton.addEventListener('click', function () {
    if (experience.style.display === 'none') {
        experience.style.display = 'block';
    }
    else {
        experience.style.display = 'none';
    }
});
