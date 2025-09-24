// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50
        ? navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)'
        : navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});

// ==========================
// Projects: Flip on hover / tap
// ==========================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        // Toggle flip on mobile/tap
        card.querySelector('.card-inner').classList.toggle('flipped');
    });
});

// ==========================
// Certifications: Reveal on scroll
// ==========================
const revealElements = document.querySelectorAll('.cert-card, .skill-cards, .project-card');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==========================
// Button hover ripple effect
// ==========================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        let x = e.clientX - this.getBoundingClientRect().left;
        let y = e.clientY - this.getBoundingClientRect().top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
