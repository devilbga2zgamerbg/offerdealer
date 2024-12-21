document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const randomCodeElement = document.getElementById('random-code');
    const colorfulBox = document.getElementById('colorful-box');

    // Array of codes
    const codes = [
        'PAYPAL2024FREE',
        'DISCOUNT2024',
        'FREEREWARDS123',
        'EXCLUSIVEPAYPAL',
        'SUPERDEAL2024'
    ];

    let countdown = 3; // Starting countdown value in seconds

    // Array of gradient colors
    const colors = [
        'linear-gradient(135deg, #f38181, #fce38a)',
        'linear-gradient(135deg, #84fab0, #8fd3f4)',
        'linear-gradient(135deg, #ff9a9e, #fad0c4)',
        'linear-gradient(135deg, #d4fc79, #96e6a1)'
    ];

    // Function to change the background color of the code box
    let colorIndex = 0;
    const changeColor = () => {
        colorfulBox.style.background = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Cycle through the colors
    };

    // Start changing the background color every second
    setInterval(changeColor, 1000);

    // Countdown and code reveal logic
    const interval = setInterval(() => {
        countdownElement.textContent = `Loading in ${countdown}...`;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);

            // Select a random code from the array
            const randomCode = codes[Math.floor(Math.random() * codes.length)];
            countdownElement.style.display = 'none'; // Hide countdown
            randomCodeElement.style.display = 'inline'; // Show code
            randomCodeElement.textContent = `CODE: ${randomCode}`;
        }
    }, 1000);
});
