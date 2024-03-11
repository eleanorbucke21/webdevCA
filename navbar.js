document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.getElementById('navbarContainer');

    if (navbarContainer) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
            })
            .catch(error => console.error('Error fetching navbar:', error));
    }
});
