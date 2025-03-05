document.addEventListener('DOMContentLoaded', function() {
  const accordion = document.querySelector('.accordion');

  // Event delegation
  accordion.addEventListener('click', function(event) {
    if (event.target.classList.contains('accordion-header')) {
      const header = event.target;
      const panel = document.getElementById(header.getAttribute('aria-controls'));

      // Toggle the panel visibility
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', !isExpanded);
      panel.style.display = isExpanded ? 'none' : 'block';
    }
  });

  // Enable keyboard navigation (keyboard events for accessibility)
  accordion.addEventListener('keydown', function(event) {
    const focusedHeader = document.activeElement;
    if (focusedHeader.classList.contains('accordion-header')) {
      const accordionItems = Array.from(accordion.querySelectorAll('.accordion-item'));
      const index = accordionItems.indexOf(focusedHeader.closest('.accordion-item'));

      if (event.key === 'ArrowDown') {
        // Move to the next header
        const nextItem = accordionItems[index + 1];
        if (nextItem) {
          nextItem.querySelector('.accordion-header').focus();
        }
      } else if (event.key === 'ArrowUp') {
        // Move to the previous header
        const prevItem = accordionItems[index - 1];
        if (prevItem) {
          prevItem.querySelector('.accordion-header').focus();
        }
      } else if (event.key === 'Enter' || event.key === 'Space') {
        // Toggle the panel visibility on Enter or Space
        const header = focusedHeader;
        const panel = document.getElementById(header.getAttribute('aria-controls'));
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', !isExpanded);
        panel.style.display = isExpanded ? 'none' : 'block';
      }
    }
  });
});
