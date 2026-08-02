function createSupportCard(card){
    const element = document.createElement("article");
    element.className = "card";
    element.innerHTML = `
      <h3>${card.name}</h3>
      <p>
        ${card.rarity}
        ${card.type}
      </p>
      <p>Level ${card.level}</p>
      <p>LB ${card.limitBreak}</p>
    `;
    
    return element;
}