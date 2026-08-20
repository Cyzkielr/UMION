const VALID_SPARKS  = [
  "Speed",
  "Stamina",
  "Power",
  "Guts",
  "Wit"
];

const VALID_SURFACES = [
  "Turf",
  "Dirt"
];

const VALID_DISTANCES = [
  "Sprint",
  "Mile",
  "Medium",
  "Long"
];

const VALID_RUNNING_STYLES = [
  "Front Runner",
  "Pace Chaser",
  "Late Surger",
  "End Closer"
];

const VALID_BORROW_PRIORITIES = [
  "Support",
  "Founder"
];

function getConfig() {
  return state.config;
}

function isValidConfigValue(key, value){
  if(key === "preferredSpark")
    return VALID_SPARKS.includes(value);
  if(key === "preferredSurface")
    return VALID_SURFACES.includes(value);
  if(key === "preferredDistance")
    return VALID_DISTANCES.includes(value);
  if(key === "preferredRunningStyle")
    return VALID_RUNNING_STYLES.includes(value);
  if(key === "borrowPriority")
    return VALID_BORROW_PRIORITIES.includes(value);
  
  if(key === "prioritizeFounderCompletion")
    return typeof value === "boolean";
  if(key === "prioritizeDeckBuilding")
    return typeof value === "boolean";
  if(key === "prioritizeSupportTraining")
    return typeof value === "boolean";
  if(key === "autoRecommendation")
    return typeof value === "boolean";
    
  return false;
}

function updateConfig(key, value) {
  if(!isValidConfigValue(key, value))
    return;
    
  state.config[key] = value;
  save("config", state.config);
}

function loadSavedConfig() {
  const savedConfig = load("config");
  
  if (!savedConfig) {
    return
  }
  
  Object.keys(savedConfig).forEach(
    key => {
      if(!isValidConfigValue(key, savedConfig[key]))
        return;
      
      state.config[key] = savedConfig[key];
    }
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
test;