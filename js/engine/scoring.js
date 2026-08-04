function scoreFounder(founder) {
  const rules = [];
  rules.push(evaluateNeedsTraining(founder));
  rules.push(evaluatePreferredSpark(founder));
  rules.push(evaluateHasDeck(founder));
  
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
    score, reasons
  };
}