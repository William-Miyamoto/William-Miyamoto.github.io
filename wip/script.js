document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    setTimeout(() => {
        content.classList.remove("hidden");
        content.classList.add("visible");
    }, 2000); // 2-second delay
});
