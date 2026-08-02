function getUma() {
  return state.uma;
}

function getOwnedUma() {
  return state.uma.filter(
    uma => uma.owned
  );
}

function getUmaByID(id) {
  return state.uma.find(
    uma => uma.id === id
  );
}