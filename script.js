const filterButtons = document.querySelectorAll('.filter-btn');
const toolCards = document.querySelectorAll('.tool-card');
const toggleBtn = document.getElementById("theme-toggle");

// Filter tools by category
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.dataset.category;

    toolCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Theme toggle
toggleBtn.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});
