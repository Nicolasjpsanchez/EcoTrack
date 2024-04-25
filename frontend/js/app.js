// Display a welcome message in the console
console.log('Welcome to EcoTrack!');

// Add an event listener to execute code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the start tracking button
    const startTrackingBtn = document.getElementById('start-tracking');

    // Add a click event listener to the start tracking button
    startTrackingBtn.addEventListener('click', function() {
        // Display a message when the start tracking button is clicked
        console.log('Start tracking button clicked!');
        
        // You can add more functionality here, such as displaying a modal or navigating to another page
    });
});
