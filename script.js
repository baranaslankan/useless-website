const button = document.getElementById('uselessButton');
const response = document.getElementById('response');

const messages = [
    "Nothing happened. As expected.",
    "Still useless.",
    "You clicked. The universe is unchanged.",
    "Try again. Or don't.",
    "2025 is just as pointless.",
    "You found the secret: there is no secret.",
    "Button moved. Achievement unlocked: wasted time.",
    "Why are you still here?",
    "This is the highlight of your day.",
    "Congratulations! You did... nothing."
];

function randomPosition() {
    const main = document.querySelector('main');
    const mainRect = main.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();

    const maxLeft = mainRect.width - btnRect.width;
    const maxTop = mainRect.height - btnRect.height;

    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    button.style.position = 'absolute';
    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
}

button.addEventListener('click', () => {
    randomPosition();
    const msg = messages[Math.floor(Math.random() * messages.length)];
    response.textContent = msg;
});

window.onload = () => {
    randomPosition();
};