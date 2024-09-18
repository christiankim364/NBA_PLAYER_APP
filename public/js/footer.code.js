fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            initializeFooter(); // Initialize footer after it's loaded (if needed)
        })
        .catch(error => console.error('Error loading footer:', error));
    
    function initializeFooter() {
    }