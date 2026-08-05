function renderConfig() {
  const config = getConfig();
  document.querySelector("#config-panel").innerHTML = `
    <label>Preferred Spark</label>
    <select id ="preferred-spark">
      <option value="speed" ${config.preferredSpark === "Speed" ? "selected" : ""}>
        Speed
      </option>
      <option value="stamina" ${config.preferredSpark === "Stamina" ? "selected" : ""}>
        Stamina
      </option>
      <option value="power" ${config.preferredSpark === "Power" ? "selected" : ""}>
        Power
      </option>
      <option value="guts" ${config.preferredSpark === "Guts" ? "selected" : ""}>
        Guts
      </option>
      <option value="wit" ${config.preferredSpark === "Wit" ? "selected" : ""}>
        Wit
      </option>
    </select>
    <br><br>
    <label>Preferred Surface</label>
    <input id="preferred-surface" value="${config.preferredSurface}">
    <br><br>
    <label>Preferred Distance</label>
    <input id="preferred-distance" value="${config.preferredDistance}">
    <br><br>
    <label>Preferred Running Style</label>
    <input id="preferred-running-style" value="${config.preferredRunningStyle}">
    <br><br>
    <label>Borrow Priority</label>
    <input id="borrow-priority" value="${config.borrowPriority}">
  `;
}

function initializeConfigEvents() {
  document.querySelector("#preferred-spark").addEventListener(
    "change", event => {
      updateConfig("preferredSpark", event.target.value);
      if(document.querySelector("#recommendation"))
        renderRecommendation();
      if(document.querySelector("#mission"))
        renderMission();
    }
  );
}