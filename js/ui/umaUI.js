function renderUmaLibrary() {
  render({
    container : "#uma-library",
    data : getOwnedUma(),
    component : createUmaCard
  });
}