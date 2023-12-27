function validateForm() {
    var username = document.getElementById('abc').value;
    var password = document.getElementById('123').value;

    if (username==='abc' || password === '123') {
        alert('Please enter both username and password.');
        return false;
    }

    // You can add more advanced validation or authentication logic here

    return true;
}
