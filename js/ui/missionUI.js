function renderMission() {
  const container = document.querySelector("#mission");
  
  if(!container)
    return;
    
  const mission = getCurrentMission();
  
  if(mission === null){
    container.innerHTML = `
      <h2>Current Mission</h2>
      <p>All Founders Completed.</p>
    `;
    return;
  }
  
  let html = "";
    mission.reasons.forEach(
      reason => {
        html += `<li>${reason}</li>`;
      }
    );
  
  container.innerHTML = `
    <h3>${mission.title}</h3>
    <p>${mission.target}</p>
    <p>Score: ${mission.score}</p>
    <ul>${html}</ul>
  `;
}