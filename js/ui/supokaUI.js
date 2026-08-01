function renderSupportLibrary(){
  const container = document.querySelector(
    "#support-library"
    
  );
  
  container.innerHTML = "";
  
  getOwnedSupportCards().forEach(
    support => {
      container.appendChild(createSupportCard(support));
    }
  );
}

function searchSupportCards(text) {
  text = text.toLowerCase();
  return state.supoka.filter(
    support => support.name.toLowerCase().includes(text)
  );
}

function getSupportByType(type) {
  return state.supoka.filter(
    support => support.type === type
  );
}
