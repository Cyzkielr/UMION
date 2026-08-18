function getConfig() {
  return state.config;
}

function updateConfig(key, value) {
  state.config[key] = value;
  save("config", state.config);
}

function loadSavedConfig() {
  const savedConfig = load("config");
  
  if (!savedConfig) {
    return
  }
  
  Object.assign(
    state.config,
    savedConfig
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