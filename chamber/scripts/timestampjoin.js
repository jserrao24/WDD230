document.addEventListener("DOMContentLoaded", function() {
    var formLoadedTime = new Date().toLocaleString();
    document.getElementById("form-loaded-time").value = formLoadedTime;
});

    // Retrieve the form-loaded time from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const formLoadedTime = urlParams.get('form-loaded-time');

    // Display the form-loaded time on the page
    const submittedTimeElement = document.querySelector('.submitted-time');
    submittedTimeElement.textContent = 'Form submitted at: ' + formLoadedTime;