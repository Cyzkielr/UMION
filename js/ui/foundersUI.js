function renderFounderLibrary() {
  render({
    container : "#founder-library",
    data : getFounders(),
    component : createFounderCard
  });
}