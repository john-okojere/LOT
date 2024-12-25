
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the index file asynchronously
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
            // Create a temporary element to parse the HTML
            const tempElement = document.createElement('div');
            tempElement.innerHTML = data;

            // Get the snippet from the index file
            const snippet = tempElement.querySelector('header> div:first-child').innerHTML;

            // Insert the snippet into the about file
            const Content = document.querySelector('header> div:first-child');
            Content.insertAdjacentHTML('beforeend', snippet);
        })
        .catch(error => console.error('Error fetching data:', error));
});

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll("header div nav div ul li a");

navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});