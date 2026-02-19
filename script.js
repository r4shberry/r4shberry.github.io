document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-overlay');
    const content = document.getElementById('resume-content');

    if (loader && content) {
        // Wait for the window to fully load
        window.addEventListener('load', () => {
            setTimeout(() => {
                // Fade out loader
                loader.style.transition = 'opacity 0.5s ease';
                loader.style.opacity = '0';
                
                // Fade in content
                content.classList.add('resume-loaded');
                
                // Remove loader from DOM after fade
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000); // The 1-second delay you requested
        });
    }
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader-overlay');
    // Targets both resume and contact content IDs
    const content = document.getElementById('resume-content') || document.getElementById('contact-content');

    setTimeout(() => {
        if (loader) {
            loader.style.transition = 'opacity 0.5s ease';
            loader.style.opacity = '0';
            
            setTimeout(() => {
                loader.style.display = 'none';
                if (content) {
                    content.classList.add('resume-loaded');
                }
            }, 500);
        }
    }, 1000); 
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader-overlay');
    // Targets the content container for whichever page is currently open
    const content = document.getElementById('resume-content') || document.getElementById('contact-content');

    setTimeout(() => {
        if (loader) {
            loader.style.transition = 'opacity 0.5s ease';
            loader.style.opacity = '0';
            
            setTimeout(() => {
                loader.style.display = 'none';
                if (content) {
                    content.classList.add('resume-loaded');
                }
            }, 500);
        }
    }, 1000); // Your 1-second professional delay
});