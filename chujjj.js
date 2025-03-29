function wyjeb() {
    var wybierzdokument = document.getElementById('wybierzdokument');

    if (wybierzdokument.style.display === 'block') {
        wybierzdokument.style.display = 'none'; // Ukryj sekcję
        document.body.style.overflow = ''; // Przywrócenie przewijania
        
        // Reset the header color
        document.querySelector('.header').style.backgroundColor = ''; // Reset to original color
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var wybierzdokument = document.getElementById('wybierzdokument');
    var header = document.querySelector('.header');

    // Change header color when wybierzdokument is clicked
    if (wybierzdokument) {
        wybierzdokument.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent propagation to the document
            
            // Change header color
            header.style.backgroundColor = 'lightgray'; // Change to gray color
        });
    }

    document.getElementById('chujjj').addEventListener('click', function(event) {
        // Toggle visibility of the section
        if (wybierzdokument.style.display === 'none' || wybierzdokument.style.display === '') {
            wybierzdokument.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Zablokowanie przewijania
        }

        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
        });
    });

    // Close button listener
    var zamknijprzycisk = document.getElementsByClassName('zamknijprzycisk')[0]; // Używamy [0] aby uzyskać pierwszy element
    if (zamknijprzycisk) {
        zamknijprzycisk.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent propagation
            wyjeb(); // Close the section
        });
    }
});
