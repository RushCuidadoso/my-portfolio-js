const langElement = document.querySelector('.languages');
const link = document.querySelectorAll('.flag');

link.forEach(element => {
    element.addEventListener('click', () => {
        langElement.querySelector('.active').classList.remove('active');
        element.classList.add('active');

        const attr = element.getAttribute('language');
        console.log(attr)

        fetch("/public/js/languages.json")
        .then(response => response.json())
        .then(response => {
            // NAVBAR
            // MAIN
            document.querySelector('.lang-main').textContent = response[attr].main.main;
            document.querySelector('.lang-description').textContent = response[attr].main.description;
            document.querySelector('.lang-sub-description').textContent = response[attr].main["sub-description"];
            // ABOUT ME
            document.querySelector('.lang-about-me-main').textContent = response[attr]["about-me"].main;
            document.querySelector('.lang-about-me-description').innerHTML = response[attr]["about-me"].description;
            document.querySelector('.lang-about-me-contact').textContent = response[attr]["about-me"].contact;
            document.querySelector('.lang-about-me-cv').textContent = response[attr]["about-me"].cv;
            // SKILLS
            document.querySelector('.lang-skills-main').textContent = response[attr].skills.main;
            document.querySelector('.lang-skills-description').textContent = response[attr].skills.description;
            document.querySelector('.lang-skills-languages').textContent = response[attr].skills.languages;
            document.querySelector('.lang-skills-languages').textContent = response[attr].skills.languages;
            

        })
    });
});