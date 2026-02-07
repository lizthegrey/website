// Accordion toggle for archived talks section
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const contentId = toggle.getAttribute('aria-controls');
            const content = document.getElementById(contentId);

            if (content) {
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

                // Toggle aria-expanded attribute
                toggle.setAttribute('aria-expanded', !isExpanded);

                // Toggle content visibility
                if (isExpanded) {
                    content.setAttribute('hidden', '');
                } else {
                    content.removeAttribute('hidden');
                }
            }
        });
    });
});
