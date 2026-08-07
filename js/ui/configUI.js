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
    <select id="preferred-running-style">
      <option value="Front Runner" ${config.preferredRunningStyle === "Front Runner" ? "selected" : ""}>
        Front Runner
      </option>
      <option value="Pace Chaser" ${config.preferredRunningStyle === "Pace Chaser" ? "selected" : ""}>
        Pace Chaser
      </option>
      <option value="Late Surger" ${config.preferredRunningStyle === "Late Surger" ? "selected" : ""}>
        Late Surger
      </option>
      <option value="End Closer" ${config.preferredRunningStyle === "End Closer" ? "selected" : ""}>
        End Closer
      </option>
    </select>
    <br><br>
    <label>Borrow Priority</label>
    <select id="borrow-priority">
      <option value="Support" ${config.borrowPriority === "Support" ? "selected" : ""}>
        Support
      </option>
      <option value="Founder" ${config.borrowPriority === "Founder" ? "selected" : ""}>
        Founder
      </option>
    </select>
  `;
}

function initializeConfigEvents() {
  const preferredSpark = document.querySelector("#preferred-spark");
  const preferredSurface = document.querySelector("#preferred-surface");
  const preferredDistance = document.querySelector("#preferred-distance");
  const preferredRunningStyle = document.querySelector("#preferred-running-style");
  const borrowPriority = document.querySelector("#borrow-priority");
  
  if(!preferredSpark)
    return;
  if(!preferredSurface)
    return;
  if(!preferredDistance)
    return;
  if(!preferredRunningStyle)
    return;
  if(!borrowPriority)
    return;
  
  preferredSpark.addEventListener(
    "change", event => {
      updateConfig("preferredSpark", event.target.value);
    }
  );
  preferredSurface.addEventListener(
    "change", event => {
      updateConfig("preferredSurface", event.target.value)
    }
  );
  preferredDistance.addEventListener(
    "change", event => {
      updateConfig("preferredDistance", event.target.value)
    }
  );
  preferredRunningStyle.addEventListener(
    "change", event => {
      updateConfig("preferredRunningStyle", event.target.value)
    }
  );
  borrowPriority.addEventListener(
    "change", event => {
      updateConfig("borrowPriority", event.target.value)
    }
  );
}