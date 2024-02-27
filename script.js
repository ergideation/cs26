let noButtonClickCount = 0;
document.getElementById('no-btn').addEventListener('click', function() {
		noButtonClickCount++;
    if (noButtonClickCount === 1) {
    document.getElementById('invitation-text').innerText = "Please think again";
    this.style.padding = "10px 40px"; // Make "No" button smaller
    document.getElementById('yes-btn').style.padding = "15px 40px"; // Make "Yes" button bigger
    document.getElementById('event-image').src = "second.jpg"; // Change the image source if needed
    }
    else if(noButtonClickCount > 1){
    document.getElementById('invitation-text').innerText = "You will now be banned from all cs chats...";
    this.style.padding = "7px 30px"; // Make "No" button smaller
    document.getElementById('yes-btn').style.padding = "20px 50px"; // Make "Yes" button bigger
    document.getElementById('event-image').src = "third.png"; // Change the image source if needed
    }
});


document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('invitation-text').innerText = "Yaaaay!";
    //document.getElementById('event-image').src = "yes.png"; // Change the image source if needed
    document.getElementById('event-image').src = "yes.jpg"; // Change the image source if needed
});

