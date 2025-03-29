document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lo').addEventListener('click', function() {
        var rogo = document.getElementById('rogo');
        var arrowIcon = document.querySelector('.arrow-icon1'); // Select the arrow icon

        // Toggle the display of the rogo section
        if (rogo.style.display === 'none' || rogo.style.display === '') {
            rogo.style.display = 'block';
            arrowIcon.style.transform = 'rotate(90deg)'; // Rotate the arrow icon
        } else {
            rogo.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)'; // Reset rotation of the arrow icon
        }
    });
});