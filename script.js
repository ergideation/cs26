document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('invitation-text').innerText = "Please think again";
    this.style.padding = "5px 10px"; // Make "No" button smaller
    document.getElementById('yes-btn').style.padding = "15px 30px"; // Make "Yes" button bigger
    document.getElementById('event-image').src = "first.png"; // Change the image source if needed
});
