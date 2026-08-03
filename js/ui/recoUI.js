function renderRecommendation(){
  const container = document.querySelector("#recommendation");
  
  const founder = getRecommendedFounder();
  
  if (founder === null) {
    container.innerHTML = `<p>All Founders Completed</p>`;
    return;
  }
  
  container.innerHTML = `
    <h3>Recommended Founder</h3>
    <p>${founder.name}</p>
  `;
}