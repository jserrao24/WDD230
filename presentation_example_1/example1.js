window.addEventListener('DOMContentLoaded', (event) => {
    var finished_rendering = function() {
        console.log("finished rendering plugins");
        var spinner = document.getElementById("spinner");
        spinner.removeAttribute("style");
        spinner.removeChild(spinner.childNodes[0]);
    };

    FB.Event.subscribe('xfbml.render', finished_rendering);

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log('Logged in successfully.');
            console.log('User ID: ' + response.authResponse.userID);
            console.log('Access Token: ' + response.authResponse.accessToken);
        }
    });
});