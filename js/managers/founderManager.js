function getFounders() {
  return state.founders;
}

function getFounderByID(id) {
  return state.founders.find(
    founder => founder.id === id
  );
}

function getCompletedFounders() {
  return state.founders.filter(
    founder => founder.completed
  );
}

function getIncompleteFounders() {
  return state.founders.filter(
    founder => !founder.completed
  );
}