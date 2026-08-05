function scoreFounder(founder) {
  const config = getConfig();
  const rules = [];
  rules.push(evaluateNeedsTraining(founder));
  if(config.preferredSpark){
    rules.push(evaluatePreferredSpark(founder));
  }
  if(config.prioritizeDeckBuilding){
    rules.push(evaluateHasDeck(founder));
  }
  
  let score = 0;
  const reasons = [];
  
  rules.forEach(
    rule => {
      score += rule.points;
      if(rule.passed)
        reasons.push(rule.reason);
    }
  );
  
  return{
    score, reasons, evaluatedRules : rules.length
  };
}