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

document.querySelector("#search-support").addEventListener(
  "input", event => {
    render({
      container : "#support-library",
      data : searchSupportCards(event.target.value),
      component : createSupportCard
    });
  }
);

document.querySelector("#filter-type").addEventListener(
  "change", event => {
    let cards;
    
    if(event.target.value === "All"){
      cards = getOwnedSupportCards();
    } else {
      cards = getSupportByType(event.target.value);
    }
    
    render({
      container : "#support-library",
      data : cards,
      component : createSupportCard
    });
  }
);