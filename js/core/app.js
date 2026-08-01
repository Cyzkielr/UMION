console.log("UMIOM v0.1.0");

document.addEventListener("DOMContentLoaded", init);

async function init() {
  console.log("Initializing UMIOM...");
  
  await loadDatabase();
  
  if(
    document.querySelector("#support-library")
  ){
    renderSupportLibrary();
  }
  
  console.log(state); 
}