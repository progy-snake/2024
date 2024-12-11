// Простий приклад інтерактивності
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".style-card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            alert(`Ви обрали стиль: ${card.querySelector("h2").textContent}`);
        });
    });
});
