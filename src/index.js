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


window.addEventListener('scroll', e => {
    let scrollPosition = window.scrollY

    if (scrollPosition < 0.25*rect.top) {
        triangle.style.borderBottom = '20vh solid black'
        triangle2.style.borderTop = '20vh solid black'
        about.style.backgroundColor = 'black'
        about.style.color = 'white'
        quote.style.color = 'white'
        quote.style.backgroundColor = 'black'
    }
    if (scrollPosition > rect.top*0.25 && scrollPosition < rect.top*0.85) {
        triangle.style.borderBottom = '20vh solid white'
        triangle2.style.borderTop = '20vh solid white'
        about.style.backgroundColor = 'white'
        quote.style.backgroundColor = 'white'
        about.style.color = 'gray'
        quote.style.color = 'gray'
        quoteText.classList.add('appear-bottom')
        quoteText.style.visibility = 'visible'
    }

    if (scrollPosition > rect.top*0.85) {
        triangle.style.borderBottom = '20vh solid black'
        triangle2.style.borderTop = '20vh solid black'
        about.style.backgroundColor = 'black'
        about.style.color = 'white'
        quote.style.color = 'white'
        quote.style.backgroundColor = 'black'
        description.classList.add('appear-left')
        profile.classList.add('appear-right')
        description.style.visibility='visible'
        profile.style.visibility='visible'
    }
})
