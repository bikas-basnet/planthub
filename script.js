// Sample data for plants and blog posts
const plants = [
    {
        id: '1',
        name: 'Rhododendron Arboreum',
        image: 'https://images.pexels.com/photos/5767577/pexels-photo-5767577.jpeg',
        category: 'Shrubs',
        description: 'Nepal's national flower, a stunning red rhododendron native to the Himalayan region.'
    },
    {
        id: '2',
        name: 'Himalayan Blue Poppy',
        image: 'https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg',
        category: 'Flowers',
        description: 'Rare and beautiful, this striking blue flower thrives in the high altitude of the Himalayas.'
    },
    {
        id: '3',
        name: 'Nepalese Alder',
        image: 'https://images.pexels.com/photos/2649770/pexels-photo-2649770.jpeg',
        category: 'Trees',
        description: 'A fast-growing tree with distinctive leaves that's essential to the Himalayan ecosystem.'
    },
    {
        id: '4',
        name: 'Himalayan Lantern Lily',
        image: 'https://images.pexels.com/photos/1458282/pexels-photo-1458282.jpeg',
        category: 'Flowers',
        description: 'Featuring unique lantern-like blooms, this lily adds charm to any garden space.'
    }
];

const blogPosts = [
    {
        id: '1',
        title: 'Cultivating Himalayan Plants at Lower Altitudes',
        image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg',
        date: 'May 15, 2025',
        excerpt: 'Learn how to successfully grow high-altitude Himalayan plants in diverse climates.'
    },
    {
        id: '2',
        title: 'The Healing Properties of Himalayan Herbs',
        image: 'https://images.pexels.com/photos/7728090/pexels-photo-7728090.jpeg',
        date: 'April 28, 2025',
        excerpt: 'Discover the traditional medicinal uses of herbs found in the Himalayan region.'
    },
    {
        id: '3',
        title: 'Sustainable Harvesting Practices',
        image: 'https://images.pexels.com/photos/5840867/pexels-photo-5840867.jpeg',
        date: 'April 10, 2025',
        excerpt: 'How we're ensuring the preservation of Nepal's precious botanical resources.'
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const plantsGrid = document.getElementById('plantsGrid');
const blogGrid = document.getElementById('blogGrid');
const newsletterForm = document.getElementById('newsletterForm');
const currentYearSpan = document.getElementById('currentYear');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Populate plants grid
function renderPlants() {
    plantsGrid.innerHTML = plants.map(plant => `
        <div class="plant-card">
            <div class="plant-image">
                <img src="${plant.image}" alt="${plant.name}">
            </div>
            <div class="plant-content">
                <span class="plant-category">${plant.category}</span>
                <h3>${plant.name}</h3>
                <p>${plant.description}</p>
                <a href="#" class="btn btn-outline">Learn more</a>
            </div>
        </div>
    `).join('');
}

// Populate blog grid
function renderBlogPosts() {
    blogGrid.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <p class="blog-date">${post.date}</p>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="btn btn-outline">Read more</a>
            </div>
        </div>
    `).join('');
}

// Newsletter form submission
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        e.target.reset();
    });
}

// Update current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderPlants();
    renderBlogPosts();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});