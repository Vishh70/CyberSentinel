// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 50, // Offset for header height (adjust this value as necessary)
            behavior: 'smooth' // Enable smooth scroll
        });
    });
});

// Scroll animation for elements as they come into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Add class 'animate' when the element is in view
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, { threshold: 0.5 }); // 50% of the element should be visible to trigger the animation

// Observe elements with class '.animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Form validation for the contact form
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Check if all fields are filled
    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission if any field is empty
        alert("Please fill in all fields.");
    }
});

// Toggle mobile menu visibility on small screens
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    // Toggle between showing and hiding the navigation links
    navLinks.classList.toggle('show');
}

// Add click event to mobile menu button if it's there
const mobileMenuButton = document.querySelector('.menu-toggle');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMenu);
}
// Smooth scroll to About Section
document.getElementById('about-button').addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector('#about');
    window.scrollTo({
        top: target.offsetTop - 50, // Offset for header height
        behavior: 'smooth'
    });
});
function openDashboard() {
    // Navigate to the dashboard folder and load the dindex.html file
    window.location.href = 'dindex.html';
}