function createSupportCard(card) {
  const div  = document.createElement("div");
  
  div.innerHTML = `
    <div class="support-header">
    <h3>${card.name}</h3>
    <span>${card.rarity}</span>
    </div>
    <p>Type: ${card.type}</p>
    <p>Lv.${card.level}</p>
    <p>LB: ${card.limitBreak}</p>
  `;
  
  return div;
}

render({
  container : "#support-library",
  data : getOwnedSupportCards(),
  component : createSupportCard
});