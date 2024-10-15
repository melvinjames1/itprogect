// Theme Switcher
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    // Save the current theme in localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
});

// Dynamic Year in Footer
const currentYearSpan = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Modal Functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeButton = document.querySelector('.close-button');

// Project Data
const projects = {
    pomodorotimer: {
        title: "Pomodoro Timer",
        image: "Pomodorotimer.png",
        description: "A productivity tool built using JavaScript and HTML. It helps users manage their time efficiently by breaking work into intervals.",
        link: "https://github.com/melvinjames1/pomodoro-timer"
    },
    fmv: {
        title: "FMV Analysis",
        image: "fmv.png",
        description: "This is a Simple Website built using angular that displays all of my favourite movies",
        link: "https://github.com/melvinjames1/FMB"
    },
};

// Open Modal Function
function openModal(projectKey) {
    const project = projects[projectKey];
    if (project) {
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalImage.alt = `${project.title} Image`;
        modalDescription.textContent = project.description;
        modalLink.href = project.link;
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }
}

// Close Modal Function
function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Event Listener for Work Items
const workItems = document.querySelectorAll('.work-item');
workItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectKey = item.getAttribute('data-project');
        openModal(projectKey);
    });
});

// Event Listener for Close Button
closeButton.addEventListener('click', closeModal);

// Event Listener for Outside Click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
    }
});

// Scroll Animations using Intersection Observer
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
