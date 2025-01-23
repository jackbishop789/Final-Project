// Get all the collapsible buttons
const collapsibles = document.querySelectorAll(".collapsible");

// Add event listeners to each collapsible button
collapsibles.forEach(button => {
    button.addEventListener("click", function() {
        // Toggle the "active" class to show/hide the content
        this.classList.toggle("active");
        
        // Toggle the display of the content
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});