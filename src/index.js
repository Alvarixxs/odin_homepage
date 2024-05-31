import './style.css';

const textElement = document.querySelector('.status-text');
const texts = ['I\'m a software developer', 'I\'m a web developer', 'I\'m a front end developer', 'I\'m a Freelancer', 'I\'m a student'];
let index = 0;

function changeText() {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 3000); // Change text every 3 seconds

// Initial text
changeText();

const triangle = document.querySelector('.triangle')
const triangle2 = document.querySelector('.triangle-2')

const quote = document.querySelector('.quote')
const quoteText = document.querySelector('.quote-text')
const about = document.querySelector('.about')
const description = document.querySelector('.description')
const profile = document.querySelector('.profile-image')
const rect = about.getBoundingClientRect();


const projects = document.querySelector('.projects');
const projectList = document.querySelectorAll('.project');
const rectProjects = projects.getBoundingClientRect()

window.addEventListener('scroll', e => {
    let scrollPosition = window.scrollY

    if (scrollPosition < 0.25*rect.top) {
        document.documentElement.style.setProperty('--default-color','black')
        document.documentElement.style.setProperty('--contrast-color','white')
    }
    else if (scrollPosition > rect.top*0.25 && scrollPosition < rect.top*0.8) {
        document.documentElement.style.setProperty('--default-color','white')
        document.documentElement.style.setProperty('--contrast-color','gray')
        quoteText.classList.add('appear-bottom')
        quoteText.style.visibility = 'visible'
    }
    else if (scrollPosition > rect.top*0.8 && scrollPosition < 1.25*rect.top) {
        document.documentElement.style.setProperty('--default-color','black')
        document.documentElement.style.setProperty('--contrast-color','white')
        description.classList.add('appear-left')
        profile.classList.add('appear-right')
        description.style.visibility='visible'
        profile.style.visibility='visible'
    }
    else if (scrollPosition > rect.top*1.25) {
        document.documentElement.style.setProperty('--default-color','white')
        document.documentElement.style.setProperty('--contrast-color','gray')
    }

    if (scrollPosition > rectProjects.top) {
        projectList.forEach((project)=>project.classList.add('come-closer'))
    }
})

projectList.forEach((project)=> {
    project.addEventListener('mouseover', e => {
        document.documentElement.style.setProperty('--default-color','black')
        document.documentElement.style.setProperty('--contrast-color','white')
    })
    project.addEventListener('mouseout', e => {
        document.documentElement.style.setProperty('--default-color','white')
        document.documentElement.style.setProperty('--contrast-color','gray')
    })
})