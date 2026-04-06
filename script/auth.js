document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = document.querySelectorAll('#loginForm .login-input');
            let allFilled = true;
            inputs.forEach(input => { 
                if (!input.value.trim()) allFilled = false; 
            });
            if (!allFilled) { 
                alert('Пожалуйста, заполните все поля'); 
                return; 
            }
            
            const modal = new bootstrap.Modal(document.getElementById('successModal'));
            modal.show();
            
            document.getElementById('successModal').addEventListener('hidden.bs.modal', function () {
                window.location.href = 'cabinet.html';
            });
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = document.querySelectorAll('#registerForm .register-input');
            let allFilled = true;
            inputs.forEach(input => {
                if (!input.value.trim()) allFilled = false;
            });
            if (!allFilled) {
                alert('Пожалуйста, заполните все поля');
                return;
            }
            const modal = new bootstrap.Modal(document.getElementById('successModal'));
            modal.show();
            
            document.getElementById('successModal').addEventListener('hidden.bs.modal', function () {
                window.location.href = 'cabinet.html';
            });
        });
    }
});