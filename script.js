document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Validasi Nama
        const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Nama tidak boleh kosong.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
// Validasi Nama
if (!nameRegex.test(nameInput.value.trim())) {
    nameInput.classList.add('error');
    nameError.textContent = 'Nama tidak valid. Hanya huruf, spasi, apostrof, dan tanda hubung yang diperbolehkan. Panjang nama 2-50 karakter.';
    isValid = false;
} else {
    nameInput.classList.remove('error');
    nameError.textContent = '';
}

if (!isValid) {
    event.preventDefault(); // Mencegah pengiriman formulir jika ada kesalahan
}



        // Validasi Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Alamat email tidak valid.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validasi Nomor Telepon
        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Nomor telepon harus hanya berisi angka.';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        // Validasi Kata Sandi
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Kata sandi harus memiliki setidaknya 6 karakter.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault(); // Mencegah pengiriman formulir jika ada kesalahan
        }
    });
});
