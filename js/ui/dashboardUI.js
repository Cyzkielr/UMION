function createStatCard(title, value) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = `
    <h3>${title}</h3>
    <h1>${value}</h1>
  `;
  
  return card;
}

function renderDashboard() {
  const container = document.querySelector("#dashboard");
  container.innerHTML = "";
  
  container.appendChild(
    createStatCard("Support Cards", getSupportCount())
  );
  
  container.appendChild(
    createStatCard("Umamusume", getUmaCount())
  );
  
  container.appendChild(
    createStatCard("Founders", getFounderCount())
  );
  
  container.appendChild(
    createStatCard("Decks", getDeckCount())
  );
}