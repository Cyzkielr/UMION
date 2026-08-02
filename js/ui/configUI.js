function renderConfig() {
  const config = getConfig();
  document.querySelector("#config-panel").innerHTML = `
    <p>Preferred Spark: ${config.preferredSpark}</p>
    <p>Surface: ${config.preferredSurface}</p>
    <p>Distance: ${config.preferredDistance}</p>
    <p>Running Style: ${config.preferredRunningStyle}</p>
    <p>Borrow Priority: ${config.borrowPriority}</p>
  `;
}