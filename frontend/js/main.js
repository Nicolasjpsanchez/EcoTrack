// This is front-end code and should be linked from an HTML file
console.log('Welcome to EcoTrack!');

document.addEventListener('DOMContentLoaded', function() {
    const startTrackingBtn = document.getElementById('start-tracking');

    // Event listener for the start tracking button
    startTrackingBtn.addEventListener('click', function() {
        console.log('Start tracking button clicked!');
        // Display a modal when the button is clicked
        displayModal();
    });
});

// Function to display a modal
function displayModal() {
    // Check if the modal element exists
    const modal = document.getElementById('trackingModal');
    if (modal) {
        modal.style.display = 'block';  // Show the modal
    } else {
        // If the modal does not exist, create it and append it to the body
        const newModal = createModal();
        document.body.appendChild(newModal);
        newModal.style.display = 'block';
    }
}

// Function to create a modal element
function createModal() {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'trackingModal');
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';  // Semi-transparent background

    // Modal content container
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.width = '50%';
    modalContent.style.margin = '10% auto';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '5px';

    // Add text to the modal
    const modalText = document.createElement('p');
    modalText.textContent = "Thank you for using EcoTrack! Your tracking has begun.";
    modalContent.appendChild(modalText);

    // Close button for the modal
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.padding = '10px 20px';
    closeButton.style.marginTop = '20px';
    closeButton.onclick = function() {
        modal.style.display = 'none';  // Hide the modal on click
    };

    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    return modal;
}
