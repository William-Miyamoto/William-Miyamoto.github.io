document.addEventListener("DOMContentLoaded", function () {
    const aboutGallery = document.querySelector(".about-gallery"); 
    const elementsToAnimate = document.querySelectorAll(".animOnScr");
    const projWidget = document.querySelector(".project-widget"); 
    const projNodes = document.querySelectorAll(".proj-node"); 

    const addProjectAnimations = () => {
        projNodes.forEach((node, index) => {
            setTimeout(() => {
                node.classList.add("animate");
            }, index * 175); 
        });
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === projWidget) {
                    addProjectAnimations();
                } else {
                    entry.target.classList.add("animate");
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.35 }); 
    elementsToAnimate.forEach(el => observer.observe(el));
    observer.observe(projWidget);
});
