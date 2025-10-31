document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');
    const contentNav = document.querySelector('.content-nav');
    const mainContent = document.querySelector('.main-content');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            this.classList.toggle('active');
            sidebar.classList.toggle('active');
            contentNav.classList.toggle('active');
            
            // Toggle body scroll when menu is open
            document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                mobileMenuButton.classList.remove('active');
                sidebar.classList.remove('active');
                contentNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 1024 && 
            !sidebar.contains(event.target) && 
            !mobileMenuButton.contains(event.target) &&
            sidebar.classList.contains('active')) {
            
            mobileMenuButton.classList.remove('active');
            sidebar.classList.remove('active');
            contentNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 1024) {
            // Reset mobile menu state on larger screens
            if (mobileMenuButton) {
                mobileMenuButton.classList.remove('active');
            }
            if (sidebar) {
                sidebar.classList.remove('active');
            }
            if (contentNav) {
                contentNav.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Initialize
    handleResize();
});
