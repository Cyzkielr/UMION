function renderDeckLibrary() {
  render({
    container : "#deck-library",
    data : getDecks(),
    component : createDeckCard
  });
}