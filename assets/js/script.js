  // JavaScript to toggle icons on collapse
  const accordionItems = document.querySelectorAll('.FAQ-Section .accordion-button');

  accordionItems.forEach(item => {
      item.addEventListener('click', function () {
          // Select the icon inside the button
          const icon = this.querySelector('i');
          // Determine if the button is expanded or collapsed
          const isExpanded = !this.classList.contains('collapsed'); // if not collapsed, it is expanded

          // Toggle between plus and minus icon
          if (isExpanded) {
              icon.classList.remove('fa-plus');
              icon.classList.add('fa-minus');
          } else {
              icon.classList.remove('fa-minus');
              icon.classList.add('fa-plus');
          }
      });
  });