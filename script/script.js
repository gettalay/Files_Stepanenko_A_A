const track = document.querySelector('.reviews-track');
const cards = document.querySelectorAll('.review-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (track && cards.length && prevBtn && nextBtn) {
    const cardsPerView = 2;
    const totalCards = cards.length;

    for (let i = 0; i < cardsPerView; i++) {
        const firstClone = cards[i].cloneNode(true);
        const lastClone = cards[totalCards - 1 - i].cloneNode(true);
        track.appendChild(firstClone);
        track.insertBefore(lastClone, track.firstChild);
    }
    
    const allCards = document.querySelectorAll('.review-card');
    const totalAllCards = allCards.length;
    let currentIndex = cardsPerView;
    
    function updateSlider(animate = true) {
        const cardWidth = allCards[0].offsetWidth;
        const gap = 40;
        const offset = currentIndex * (cardWidth + gap);
        track.style.transition = animate ? 'transform 0.5s ease' : 'none';
        track.style.transform = `translateX(-${offset}px)`;
    }
    
    function moveToNext() {
        if (currentIndex >= totalAllCards - cardsPerView) {
            currentIndex = cardsPerView;
            updateSlider(false);
            setTimeout(() => {
                currentIndex++;
                updateSlider(true);
            }, 20);
        } else {
            currentIndex++;
            updateSlider(true);
        }
    }
    
    function moveToPrev() {
        if (currentIndex <= 0) {
            currentIndex = totalAllCards - cardsPerView * 2;
            updateSlider(false);
            setTimeout(() => {
                currentIndex--;
                updateSlider(true);
            }, 20);
        } else {
            currentIndex--;
            updateSlider(true);
        }
    }
    
    nextBtn.addEventListener('click', moveToNext);
    prevBtn.addEventListener('click', moveToPrev);
    
    window.addEventListener('resize', () => updateSlider(false));
    updateSlider(false);
}

const clientsTrack = document.querySelector('.clients-track');
const clientsPrevBtn = document.querySelector('.clients-prev-btn');
const clientsNextBtn = document.querySelector('.clients-next-btn');
const dots = document.querySelectorAll('.dot');

if (clientsTrack && clientsPrevBtn && clientsNextBtn) {
    const clientsSlides = document.querySelectorAll('.clients-image');
    const slidesTotal = clientsSlides.length;
    
    if (slidesTotal > 0) {
        const firstClone = clientsSlides[0].cloneNode(true);
        const lastClone = clientsSlides[slidesTotal - 1].cloneNode(true);
        clientsTrack.appendChild(firstClone);
        clientsTrack.insertBefore(lastClone, clientsTrack.firstChild);
    }
    
    const allSlides = document.querySelectorAll('.clients-image');
    const totalAllSlides = allSlides.length;
    let clientsIndex = 1;
    const slidesPerView = 1;
    
    function updateClientsSlider(animate = true) {
        const slideWidth = document.querySelector('.clients-slider').offsetWidth;
        const offset = clientsIndex * slideWidth;
        clientsTrack.style.transition = animate ? 'transform 0.5s ease' : 'none';
        clientsTrack.style.transform = `translateX(-${offset}px)`;
        
        if (dots.length) {
            const realIndex = clientsIndex - 1;
            const activeDotIndex = (realIndex + slidesTotal) % slidesTotal;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeDotIndex);
            });
        }
    }
    
    function moveClientsNext() {
        if (clientsIndex >= totalAllSlides - slidesPerView) {
            clientsIndex = 1;
            updateClientsSlider(false);
            setTimeout(() => {
                clientsIndex++;
                updateClientsSlider(true);
            }, 20);
        } else {
            clientsIndex++;
            updateClientsSlider(true);
        }
    }
    
    function moveClientsPrev() {
        if (clientsIndex <= 0) {
            clientsIndex = totalAllSlides - slidesPerView - 1;
            updateClientsSlider(false);
            setTimeout(() => {
                clientsIndex--;
                updateClientsSlider(true);
            }, 20);
        } else {
            clientsIndex--;
            updateClientsSlider(true);
        }
    }
    
    clientsNextBtn.addEventListener('click', moveClientsNext);
    clientsPrevBtn.addEventListener('click', moveClientsPrev);
    
    if (dots.length) {
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                clientsIndex = i + 1;
                updateClientsSlider(true);
            });
        });
    }
    
    window.addEventListener('resize', () => updateClientsSlider(false));
    updateClientsSlider(false);
}

const menuItems = document.querySelectorAll('.menu-item');
const tabContents = document.querySelectorAll('.tab-content');

if (menuItems.length && tabContents.length) {
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            menuItems.forEach(menu => menu.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(tab => tab.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
}

const submitOrderBtn = document.getElementById('submitOrderBtn');
if (submitOrderBtn) {
    const servicesCheckboxes = document.querySelectorAll('#order .service-item input');
    
    submitOrderBtn.addEventListener('click', function() {
        let checked = false;
        servicesCheckboxes.forEach(cb => {
            if (cb.checked) checked = true;
        });
        if (!checked) {
            alert('Пожалуйста, выберите хотя бы одну услугу');
            return;
        }
        const modal = new bootstrap.Modal(document.getElementById('thankyouModal'));
        modal.show();
        servicesCheckboxes.forEach(cb => cb.checked = false);
    });
}

const uploadLink = document.getElementById('uploadLink');
if (uploadLink) {
    uploadLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Здесь будет открытие проводника для выбора файлов');
    });
}

const goToTopBtn = document.getElementById('goToTop');
if (goToTopBtn) {
    goToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}