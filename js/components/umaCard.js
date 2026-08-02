function createUmaCard(uma) {
  const element = document.createElement("article");
  element.className("card");
  element.innerHTML = `
    <h3>${uma.name}</h3>
    <p>★ ${uma.stars}</p>
    <p>Generation ${uma.generation}</p>
    <p>${uma.status}</p>
  `;
  
  return element;
}