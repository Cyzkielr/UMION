function getSupportCards() {
  return state.supoka;
}

function getOwnedSupportCards() {
  return state.supoka.filter(
    card => card.owned
  );
}

function getSupportCardByID(id) {
  return state.supoka.find(
    card => card.id === id
  );
}

function addSupportCard(card) {
  state.supoka.push(card);
  
  save("supoka", state.supoka);
  publish("supportUpdated");
}

function updateSupportCard(id, newData) {
  const card = getSupportCardByID(id);
  
  if(!card) return;
  Object.assign(card, newData);
  
  save("supoka", state.supoka);
  publish("supportUpdated");
}

function deleteSupportCard(id) {
  state.supoka = state.supoka.filter(
    card => card.id !== id
  );
  
  save("supoka", state.supoka);
  publish("supportUpdated");
}

function sortSupportCards(by) {
  return [...state.supoka].sort(
    (a,b) => {
      if(a[by]<b[by]) return -1;
      if(a[by]>b[by]) return 1;
      return 0;
    }
  );
}