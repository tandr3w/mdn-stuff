function createParagraph() { // Paragraph creation function
    const para = document.createElement('p'); // Create new paragraph variable
    para.textContent = 'You clicked the button!'; // Set content of paragraph
    document.body.appendChild(para); // Add paragraph to webpage
};

// const buttons = document.querySelectorAll('button'); // Variable points to all buttons on the page (selector inside the quotes is the same as css)
const heading = document.querySelector('#heading_A');
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');

button1.addEventListener('click', createParagraph); // For each button, on click, call createParagraph
// .removeEventListener to remove or with an AbortController
button1.onclick = () => { // Add onclick event listenre that makes a prompt
    if (!heading.innerHTML){
        const name = prompt('What is your name?'); // Creates a prompt and stores result in var
        alert(`Hello ${name}, nice to see you!`); // Creates an alert
        heading.textContent = `Welcome ${name}! Enjoy clicking the button more.` // Backticks let you easily put variables inside text
    }
};
function random(number) {
    return Math.floor(Math.random() * (number+1));
}
function bgChange(e) { // Event object -- automatically passed and gives some info
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

button2.addEventListener('click', bgChange)

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);

// To prevent default behavior (e.g. validation checks), call e.preventDefault();
// When events are nested, it goes to the deepest one and bubbles up.

const btn = document.querySelector('.btn3');
const videoBox = document.querySelector('div');

function displayVideo() {
  if (videoBox.getAttribute('class') === 'hidden') {
    videoBox.setAttribute('class','showing');
  }
}

btn.addEventListener('click', displayVideo);

videoBox.addEventListener('click', () => videoBox.setAttribute('class', 'hidden'));

const video = document.querySelector('video');

video.addEventListener('click', () => video.play());