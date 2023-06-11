// Initialize the Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
      appId      : '233884559426921',
      cookie     : true,
      xfbml      : true,
      version    : 'v11.0'
    });
  };
  
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  // Function called after the user logs in
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // The user is logged in and authorized your app
        var accessToken = response.authResponse.accessToken;
        console.log('Access Token:', accessToken);
        // You can now make API calls using the access token
        // For example: FB.api('/me', {fields: 'name,email'}, function(response) { console.log(response); });
      } else {
        // The user is logged out or has not authorized your app
        console.log('User is not logged in.');
      }
    });
  }