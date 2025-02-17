document.addEventListener("DOMContentLoaded", function () {
    const aboutGallery = document.querySelector(".about-gallery"); // Change selector as needed
    const elementsToAnimate = document.querySelectorAll(".animOnScr");
    const projNodes = document.querySelectorAll(".proj-node");

    // Function to add animations with delays for proj-node elements
    const addProjectAnimation = (entry, index) => {
        setTimeout(() => {
            entry.target.classList.add("animate");
        }, index * 200); // Adjust delay as needed for staggered effect
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('proj-node')) {
                    // Apply staggered animation to proj-node elements
                    addProjectAnimation(entry, index);
                } else {
                    // Animate other elements in a group (like about-gallery elements)
                    entry.target.classList.add("animate");
                }
                
                observer.unobserve(entry.target); // Stop observing after triggering
            }
        });
    }, { threshold: 0.35 }); // Adjust threshold as needed

    // Observing the elements
    elementsToAnimate.forEach(el => observer.observe(el));
    projNodes.forEach(node => observer.observe(node));
});
