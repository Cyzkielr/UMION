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
  const stats = getDashboardStats();
  
  const dashboardCards = [
    {
      title : "Support Cards",
      value : stats.supoka
    },
    {
      title : "Umamusume",
      value : stats.uma
    },
    {
      title : "Founders",
      value : stats.founders
    },
    {
      title : "Decks",
      value : stats.decks
    }
  ];
  
  container.innerHTML = "";
  dashboardCards.forEach(
    card => {
      container.appendChild(
        createStatCard(card.title, card.value)
      );
    }
  );
}