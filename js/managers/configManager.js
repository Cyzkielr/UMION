const CONFIG_STORAGE_KEY = "umiom-config";

function saveConfig() {
  localStorage.setItem(
    CONFIG_STORAGE_KEY,
    JSON.stringify(state.config)
  );
}

function getConfig() {
  return state.config;
}

function updateConfig(key, value) {
  state.config[key] = value;
  saveConfig();
}

function loadSavedConfig() {
  const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
  
  if (!saved) {
    return
  }
  
  Object.assign(
    state.config,
    JSON.parse(saved)
  );
}

function getPreferredSpark() {
  return state.config.preferredSpark;
}

function getPreferredSurface() {
  return state.config.preferredSurface;
}

function getPreferredDistance() {
  return state.config.preferredDistance;
}

function getPreferredRunningStyle() {
  return state.config.preferredRunningStyle;
}

function getBorrowPriority() {
  return state.config.borrowPriority;
}

loadSavedConfig();