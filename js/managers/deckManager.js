function getDecks() {
  return state.decks;
}

function getDecksByID(id) {
  return state.decks.find(
    deck => deck.id === id
  );
}