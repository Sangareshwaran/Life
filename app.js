const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const startTime = new Date('2006-07-29T10:56:00');

function updateCounter() {
    const now = new Date();
    const elapsed = now - startTime;

    // Calculate the time components
    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    // Construct the display string
    let displayString = "Entered this planet ";

    if (years > 0) displayString += `${years} years, `;
    if (days > 0) displayString += `${days} days, `;
    if (hours > 0) displayString += `${hours} hours, `;
    if (minutes > 0) displayString += `${minutes} minutes, `;
    if (seconds > 0) displayString += `${seconds} seconds ago`;

    // Trim any trailing comma and space
    displayString = displayString.replace(/, $/, "");

    // Display the result
    document.getElementById('counter').innerText = displayString;
}

// Update the counter every second
setInterval(updateCounter, 1000);
// Update the counter every second
setInterval(updateCounter, 1000);

// Initial call to display the counter immediately
updateCounter();