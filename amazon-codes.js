document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const initialTime = {
        hours: 3,
        minutes: 34,
        seconds: 12,
    };
    let hours = initialTime.hours;
    let minutes = initialTime.minutes;
    let seconds = initialTime.seconds;

    // Function to update the timer display
    const updateTimer = () => {
        // Format time values as two digits
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        // Update the timer element
        timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    // Function to decrement the timer
    const decrementTimer = () => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            // Reset the timer when it reaches 0
            hours = initialTime.hours;
            minutes = initialTime.minutes;
            seconds = initialTime.seconds;
        } else if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                }
            }
        }

        // Update the timer display
        updateTimer();
    };

    // Initial timer update
    updateTimer();

    // Start the timer interval
    setInterval(decrementTimer, 1000);
});
