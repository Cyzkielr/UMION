function getDecks() {
  return state.decks;
}

function getDeckByID(id) {
  return state.decks.find(
    deck => deck.id === id
  );
}