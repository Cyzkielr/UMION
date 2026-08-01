async function loadDatabase() {
  state.player = await loadJSON("data/player.json");
  state.settings = await loadJSON("data/settings.json");
  state.supoka = await loadJSON("data/supoka.json");
  state.uma = await loadJSON("data/uma.json");
  state.founders = await loadJSON("data/founders.json");
  state.decks = await loadJSON("data/decks.json");
}

async function loadJSON(path) {
  const response = await fetch(path);
  return await response.json();
}