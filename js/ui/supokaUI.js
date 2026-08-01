function renderSupportLibrary(){
  render({
    container : "#support-library",
    data : getOwnedSupportCards(),
    component : createSupportCard
  });
}