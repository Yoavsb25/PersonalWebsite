document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-bar a');
    const navBar = document.querySelector('.nav-bar');
    const navHeight = navBar.offsetHeight;
    const animatedElements = document.querySelectorAll('.animate__animated');
    const form = document.getElementById('signin-form');
    const signInLink = document.querySelector('.nav-bar a[href="sign-in.html"]');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > navHeight) {
            document.body.style.paddingTop = navHeight + 'px';
            navBar.classList.add('nav-bar--scrolled');
        } else {
            document.body.style.paddingTop = 0;
            navBar.classList.remove('nav-bar--scrolled');
        }
    });

    // Smooth scrolling setup for all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Scroll animation setup
    function checkScroll() {
        animatedElements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('animate__fadeIn'); // Add your animation class here
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    // Smooth scrolling function
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const elementPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    // Event listener for form submission (for demonstration purposes only)
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            // Authentication logic
            console.log('Form submitted');
        });
    }

    // Event listener for the "Sign In" link
    if (signInLink) {
        signInLink.addEventListener('click', function (event) {
            // You can add additional logic here if needed
            console.log('Sign In link clicked');
        });
    }

    checkScroll(); // Check on page load
});
