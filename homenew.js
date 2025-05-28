document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.state-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });

    card.addEventListener('click', () => {
      const stateName = card.querySelector('h3').textContent;
      alert(`Explore the beauty of ${stateName}!`);
      // You can later replace the alert with navigation to a new page
    });
  });
});
