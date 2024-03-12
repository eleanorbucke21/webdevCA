// footer.js
document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.getElementById('footerContainer');

    if (footerContainer) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error fetching footer:', error));
    }
});