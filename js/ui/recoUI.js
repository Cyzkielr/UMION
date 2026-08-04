function renderRecommendation(){
  const container = document.querySelector("#recommendation");
  
  const recommendation = getRecommendedFounder();
  recommendation.founder
  recommendation.score
  
  if (recommendation.founder === null) {
    container.innerHTML = `<p>All Founders Completed</p>`;
    return;
  }
  
  container.innerHTML = `
    <h3>Recommended Founder</h3>
    <p>${recommendation.founder.name}</p>
    <p>Score: ${recommendation.score}</p>
  `;
}