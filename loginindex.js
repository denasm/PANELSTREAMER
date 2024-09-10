document.addEventListener("DOMContentLoaded", function() {
    const KeyAuthApp = new KeyAuth(
        "Artist V4", // Application Name
        "xDUhkJlAtw", // Owner ID
        "179ef0df31409e4c884389c28e669efdcfe4c2f3048ac5634e45d10262cbec3d", // Application Secret
        "1.0" // Application Version
    );

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Authenticate the user
        KeyAuthApp.login(username, password, function(response) {
            if (response.success) {
                // Redirect to the main page if authentication is successful
                window.location.href = 'main.html'; // Change 'main.html' to the URL of your main page
            } else {
                // Display an error message if authentication fails
                loginError.textContent = response.message;
            }
        });
    });
});
