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