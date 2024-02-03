function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcoded login credentials for demonstration purposes
    var correctUsername = 'user123';
    var correctPassword = 'pass123';

    console.log('Entered username:', username);
    console.log('Entered password:', password);

    if (username === correctUsername && password === correctPassword) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}


function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var button = document.querySelector('.password-container button');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        button.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        button.textContent = 'Show';
    }
}