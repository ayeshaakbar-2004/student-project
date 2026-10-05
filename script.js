// Wait for the webpage to fully load before running the code
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickBtn");
    const message = document.getElementById("message");

    // Add a click event listener to the button
    button.addEventListener("click", () => {
        message.textContent = "Hello! Your JavaScript is working successfully with Netlify!";
    });

    console.log("Script loaded and running properly!");
});