//  JavaScript Event Handling //

// Theme toggle functionality
document.querySelector('.theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 
        'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Building Interactive Elements //

// Counter game functionality
const counterValue = document.querySelector('.counter-value');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');
const resetBtn = document.querySelector('.reset');

let count = 0;

incrementBtn.addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
    counterValue.style.color = '#2ecc71';
    setTimeout(() => {
        counterValue.style.color = '#3498db';
    }, 300);
});

decrementBtn.addEventListener('click', function() {
    count--;
    counterValue.textContent = count;
    counterValue.style.color = '#e74c3c';
    setTimeout(() => {
        counterValue.style.color = '#3498db';
    }, 300);
});

resetBtn.addEventListener('click', function() {
    count = 0;
    counterValue.textContent = count;
    counterValue.style.color = '#95a5a6';
    setTimeout(() => {
        counterValue.style.color = '#3498db';
    }, 300);
});

// FAQ section functionality//

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other open FAQs
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('span').textContent = '+';
            }
        });
        
        // Toggle current FAQ//

        item.classList.toggle('active');
        const span = item.querySelector('span');
        span.textContent = item.classList.contains('active') ? '−' : '+';
    });
});

// Form Validation with JavaScript //

const form = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

// Validation functions//

function validateName() {
    const name = nameInput.value.trim();
    const nameError = document.getElementById('name-error');
    
    if (name.length < 2) {
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        nameError.style.display = 'block';
        return false;
    } else {
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
        nameError.style.display = 'none';
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        emailError.style.display = 'block';
        return false;
    } else {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        emailError.style.display = 'none';
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value;
    const passwordError = document.getElementById('password-error');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    if (!passwordRegex.test(password)) {
        passwordInput.classList.add('invalid');
        passwordInput.classList.remove('valid');
        passwordError.style.display = 'block';
        return false;
    } else {
        passwordInput.classList.add('valid');
        passwordInput.classList.remove('invalid');
        passwordError.style.display = 'none';
        return true;
    }
}

function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const confirmPasswordError = document.getElementById('confirm-password-error');
    
    if (password !== confirmPassword) {
        confirmPasswordInput.classList.add('invalid');
        confirmPasswordInput.classList.remove('valid');
        confirmPasswordError.style.display = 'block';
        return false;
    } else {
        confirmPasswordInput.classList.add('valid');
        confirmPasswordInput.classList.remove('invalid');
        confirmPasswordError.style.display = 'none';
        return true;
    }
}

// Real-time validation//

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Form submission//

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    
    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        // Form is valid//

        formSuccess.style.display = 'block';
        formError.style.display = 'none';
        
        // Reset form after success//
        setTimeout(() => {
            form.reset();
            formSuccess.style.display = 'none';
            
            // Remove validation classes//
            const inputs = form.querySelectorAll('input');
            inputs.forEach(input => {
                input.classList.remove('valid');
                input.classList.remove('invalid');
            });
        }, 3000);
    } else {
        // Form is invalid//
        formError.style.display = 'block';
        formSuccess.style.display = 'none';
    }
});