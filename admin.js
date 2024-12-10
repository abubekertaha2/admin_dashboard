document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const boxes = document.querySelectorAll('.box');
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        boxes.forEach(box => {
            const projectTitle = box.querySelector('h3').textContent.toLowerCase();
            if (projectTitle.includes(searchTerm)) {
                box.style.display = ''; 
            } else {
                box.style.display = 'none'; 
            }
        });
    });
});