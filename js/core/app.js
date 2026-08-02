document.addEventListener("DOMContentLoaded", init);

async function init() {
  await loadDatabase();
  state.initialized = true;
  
  if (document.querySelector("#support-library"))
    renderSupportLibrary();
  if (document.querySelector("#uma-library"))
    renderUmaLibrary();
  if (document.querySelector("#founder-library"))
    renderFounderLibrary();
  if (document.querySelector("#deck-library"))
    renderDeckLibrary();
  if (document.querySelector("#dashboard"))
    renderDashboard();
}