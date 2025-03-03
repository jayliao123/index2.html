
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navigation bar background change on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.style.backgroundColor = '#0a0a0a';
    nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  } else {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    nav.style.boxShadow = 'none';
  }
});

// Form submission handling
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Simulate form submission (in a real app, you'd send this to a server)
    console.log('Form Submission:', { name, email, message });
    
    // Show success message
    form.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><p>Thank you for your message! We\'ll get back to you soon.</p></div>';
    
    // Style the success message
    const successMessage = document.querySelector('.success-message');
    successMessage.style.textAlign = 'center';
    successMessage.style.padding = '20px';
    
    const icon = successMessage.querySelector('i');
    icon.style.fontSize = '3rem';
    icon.style.color = '#6c63ff';
    icon.style.marginBottom = '15px';
  });
}

// Animation for statistics when they come into view
const stats = document.querySelectorAll('.stat h3');
const animateStats = () => {
  stats.forEach(stat => {
    const value = parseInt(stat.textContent);
    let current = 0;
    const increment = value / 50; // Adjust speed of counting
    const updateCount = () => {
      if (current < value) {
        current += increment;
        stat.textContent = Math.ceil(current) + '%';
        setTimeout(updateCount, 20);
      } else {
        stat.textContent = value + '%';
      }
    };
    updateCount();
  });
};

// Trigger animations when elements come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('stats-section')) {
        animateStats();
      }
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Hover effects for cards
const cards = document.querySelectorAll('.benefit-card, .security-item');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
  });
});
