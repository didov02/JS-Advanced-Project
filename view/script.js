document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
        } else {
            window.location.href = '../html/main.html';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerButton').addEventListener('click', function(event) {
        event.preventDefault();
    
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
    
        if (username.trim() === '' || password.trim() === '' || email.trim() === '' || confirmPassword.trim() === '') {
            alert('Please enter all parameters.');
        } else {
            window.location.href = '../html/main.html';
        }
    });
});


