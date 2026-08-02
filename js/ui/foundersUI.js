function renderFounderLibrary() {
  render({
    contaoner : "#founder-library",
    data : getFounders(),
    component : createFounderCard
  });
}