document.addEventListener("DOMContentLoaded", () => {
    const cursorIcon = document.querySelector(".cursor-icon");

    // Ensure the cursor-icon element exists
    if (!cursorIcon) {
        console.error("Cursor icon element not found!");
        return;
    }

    // Move the icon with the cursor
    document.addEventListener("mousemove", (e) => {
        cursorIcon.style.left = `${e.pageX}px`;
        cursorIcon.style.top = `${e.pageY}px`;
    });

    // Optional: Add a spinning animation on click
    cursorIcon.addEventListener("click", () => {
        cursorIcon.classList.add("spin");
        setTimeout(() => cursorIcon.classList.remove("spin"), 1000);
    });
});
