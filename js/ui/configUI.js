function renderConfig() {
  const config = getConfig();
  document.querySelector("#config-panel").innerHTML = `
    <label>Preferred Spark</label>
    <select id ="preferred-spark">
      <option value="Speed" ${config.preferredSpark === "Speed" ? "selected" : ""}>
        Speed
      </option>
      <option value="Stamina" ${config.preferredSpark === "Stamina" ? "selected" : ""}>
        Stamina
      </option>
      <option value="Power" ${config.preferredSpark === "Power" ? "selected" : ""}>
        Power
      </option>
      <option value="Guts" ${config.preferredSpark === "Guts" ? "selected" : ""}>
        Guts
      </option>
      <option value="Wit" ${config.preferredSpark === "Wit" ? "selected" : ""}>
        Wit
      </option>
    </select>
    <br><br>
    <label>Preferred Surface</label>
    <select id="preferred-surface">
      <option value="Turf" ${config.preferredSurface === "Turf" ? "selected" : ""}>
        Turf
      </option>
      <option value="Dirt" ${config.preferredSurface === "Dirt" ? "selected" : ""}>
        Dirt
      </option>
    </select>
    <br><br>
    <label>Preferred Distance</label>
    <select id="preferred-distance">
      <option value="Sprint" ${config.preferredDistance === "Sprint" ? "selected" : ""}>
        Sprint
      </option>
      <option value="Mile" ${config.preferredDistance === "Mile" ? "selected" : ""}>
        Mile
      </option>
      <option value="Medium" ${config.preferredDistance === "Medium" ? "selected" : ""}>
        Medium
      </option>
      <option value="Long" ${config.preferredDistance === "Long" ? "selected" : ""}>
        Long
      </option>
    </select>
    <br><br>
    <label>Preferred Running Style</label>
    <input id="preferred-running-style" value="${config.preferredRunningStyle}">
    <br><br>
    <label>Borrow Priority</label>
    <input id="borrow-priority" value="${config.borrowPriority}">
  `;
}

function initializeConfigEvents() {
  const preferredSpark = document.querySelector("#preferred-spark");
  
  if(!preferredSpark)
    return;
  
  preferredSpark.addEventListener(
    "change", event => {
      updateConfig("preferredSpark", event.target.value);
      if(document.querySelector("#recommendation"))
        renderRecommendation();
      if(document.querySelector("#mission"))
        renderMission();
    }
  );
}