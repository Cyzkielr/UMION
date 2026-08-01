document.addEventListener("DOMContentLoaded", init);

async function init() {
  await loadDatabase();
  state.initialized = true;
  
  if (document.querySelector("#support-library")) {
    renderSupportLibrary();
  }
}