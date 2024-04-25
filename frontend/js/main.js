// This is front-end code and should be linked from an HTML file
console.log('Welcome to EcoTrack!');

document.addEventListener('DOMContentLoaded', function() {
    const startTrackingBtn = document.getElementById('start-tracking');
    startTrackingBtn.addEventListener('click', function() {
        console.log('Start tracking button clicked!');
        // Additional functionality here, such as displaying a modal or navigating to another page
    });
});
