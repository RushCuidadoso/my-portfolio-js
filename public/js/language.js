var languages;
var attr;
var langElement = document.querySelector('.languages');
var link = document.querySelectorAll('.flag');

link.forEach(element => {
    element.addEventListener('click', () => {
        langElement.querySelector('.active').classList.remove('active');
        element.classList.add('active');
        attr = element.getAttribute('language');
        setTranslate();
    });
});

fetch("/public/js/languages.json")
.then(response => response.json())
.then(response => languages = response)

function setTranslate(){

    // NAVBAR
    document.querySelector('.lang-navbar-about-me').textContent = languages[attr].navbar['about-me'];
    document.querySelector('.lang-navbar-skills').textContent = languages[attr].navbar.skills;
    document.querySelector('.lang-navbar-projects').textContent = languages[attr].navbar.projects;
    document.querySelector('.lang-navbar-certificates').textContent = languages[attr].navbar.certificates;

    // MAIN
    document.querySelector('.lang-main').textContent = languages[attr].main.main;
    document.querySelector('.lang-description').textContent = languages[attr].main.description;
    document.querySelector('.lang-sub-description').textContent = languages[attr].main["sub-description"];
    // ABOUT ME
    document.querySelector('.lang-about-me-main').textContent = languages[attr]["about-me"].main;
    document.querySelector('.lang-about-me-description').innerHTML = languages[attr]["about-me"].description;
    document.querySelector('.lang-about-me-contact').textContent = languages[attr]["about-me"].contact;
    document.querySelector('.lang-about-me-cv').textContent = languages[attr]["about-me"].cv;
    // SKILLS
    document.querySelector('.lang-skills-main').textContent = languages[attr].skills.main;
    document.querySelector('.lang-skills-description').innerHTML = languages[attr].skills.description;
    document.querySelector('.lang-skills-languages').textContent = languages[attr].skills.languages;
    document.querySelector('.spanish').textContent = languages[attr].skills.list.spanish;
    document.querySelector('.portuguese').textContent = languages[attr].skills.list.portuguese;
    document.querySelector('.english').textContent = languages[attr].skills.list.english;
    document.querySelector('.french').textContent = languages[attr].skills.list.french;
    // PROJECTS
    document.querySelector('.lang-projects-main').textContent = languages[attr].projects.main;
    document.querySelector('.lang-projects-pokemon-name').textContent = languages[attr].projects.projects.pokemon.name;
    document.querySelector('.lang-projects-pokemon-description').textContent = languages[attr].projects.projects.pokemon.description;
    document.querySelector('.lang-projects-news-name').textContent = languages[attr].projects.projects.news.name;
    document.querySelector('.lang-projects-news-description').textContent = languages[attr].projects.projects.news.description;
    document.querySelector('.lang-projects-instagram-name').textContent = languages[attr].projects.projects.instagram.name;
    document.querySelector('.lang-projects-instagram-description').textContent = languages[attr].projects.projects.instagram.description;
    document.querySelector('.lang-projects-checks-name').textContent = languages[attr].projects.projects.checks.name;
    document.querySelector('.lang-projects-checks-description').textContent = languages[attr].projects.projects.checks.description;
    document.querySelector('.lang-projects-see-more').textContent = languages[attr].projects['see-more'];
    // CERTIFICATES
    document.querySelector('.lang-certificates-main').textContent = languages[attr].certificates.main;
    document.querySelector('.lang-certificates-university').textContent = languages[attr].certificates.certificates.diploma.name;
    document.querySelector('.lang-certificates-webmaster').textContent = languages[attr].certificates.certificates['danki-frontend'].name;
    document.querySelector('.lang-certificates-remote').textContent = languages[attr].certificates.certificates.remote.name;
    document.querySelector('.lang-certificates-inter').textContent = languages[attr].certificates.certificates.inter.name;
    // FOOTER
    document.querySelector('.lang-footer-name').textContent = languages[attr].footer.main;
    document.querySelector('.lang-footer-rights').textContent = languages[attr].footer.copyright;
}