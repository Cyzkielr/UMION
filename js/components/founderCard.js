function createFounderCard(founder) {
  const element = document.createElement("article");
  element.classList.add("card");
  element.innerHTML = `
    <h3>${founder.name}</h3>
    <p>Family ${founder.family}</p>
    <p>Deck ${founder.deck}</p>
    <p>${founder.completed ? "Completed" : "In Progress"}</p>
  `;
  
  return element;
}