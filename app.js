function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(user === 'ajeann' && pass === 'aena123') {
        window.location.href = 'website.html';
    } else {
        document.getElementById('error').textContent = 'Wrong username or password!';
    }

    return false;
}
