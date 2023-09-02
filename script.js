document.addEventListener("DOMContentLoaded", function() {
    // Find the button element by its ID
    var redirectButton = document.getElementById("redirectButton");

    // Add a click event listener to the button
    redirectButton.addEventListener("click", function() {
        // Redirect to page2.html
        window.location.href = "page2.html";
    });
});
