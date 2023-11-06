/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const input = document.querySelector('.newsletter input[type="email"]');
    const messageDiv = document.querySelector('.newsletter .message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = input.value.trim();

        if (email === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
});