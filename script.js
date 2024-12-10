// script.js
function toggleMode() {
    const root = document.documentElement;
    const currentBgColor = getComputedStyle(root).getPropertyValue('--background-color').trim();
    const githubIcon = document.getElementById('github-icon');
    const linkedinIcon = document.getElementById('linkedin-icon');
    
    if (currentBgColor === '#111') {
        // Switch to Light Mode
        root.style.setProperty('--background-color', '#fff');
        root.style.setProperty('--text-color', '#111');
        githubIcon.src = './assets/github_lightmode.png'; // Use dark mode version of GitHub icon
        linkedinIcon.src = './assets/linkedin_lightmode.png';
    } else {
        // Switch to Dark Mode
        root.style.setProperty('--background-color', '#111');
        root.style.setProperty('--text-color', '#fff');
        githubIcon.src = './assets/github_darkmode.png'; // Use dark mode version of GitHub icon
        linkedinIcon.src = './assets/linkedin_darkmode.png';
    }
}
