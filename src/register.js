const password = document.getElementById('password');
const passwordAgain = document.getElementById('password-again');

password.addEventListener('input', () => {
    comparePasswords();
})

passwordAgain.addEventListener('input', () => {
    comparePasswords();
})

/**
 * Check if passwords match and add style class accordingly
 */
const comparePasswords = () => {
    if (password.value == '' && passwordAgain.value == '') {
        password.classList.remove('invalid', 'valid');
        passwordAgain.classList.remove('invalid', 'valid');
        return;
    }

    if (password.value != passwordAgain.value) {
        password.classList.remove('valid');
        passwordAgain.classList.remove('valid');
        password.classList.add('invalid');
        passwordAgain.classList.add('invalid');
    } else {
        password.classList.remove('invalid');
        passwordAgain.classList.remove('invalid');
        password.classList.add('valid');
        passwordAgain.classList.add('valid');
    }
}