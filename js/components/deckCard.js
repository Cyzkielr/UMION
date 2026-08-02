function createDeckCard(deck) {
  const element = document.createElement("article");
  element.classList.add("card");
  element.innerHTML = `
    <h3>${deck.name}</h3>
    <p>Borrow: ${deck.borrow}</p>
    <h4>Support Cards</h4>
    <ul>
      ${deck.cards.map(card => `<li>${card}</li>`).join("")}
    </ul>
  `;
  
  return element;
}