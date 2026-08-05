function getCurrentMission() {
  const recommendation = getRecommendedFounder();
  const missions = [];
  
  if(recommendation.founder === null)
    return null;
  
  missions.push({
    id : "TRAIN_FOUNDER",
    priority : 100,
    title : "Train Founder",
    target : recommendation.founder.name,
    score : recommendation.score,
    reasons : recommendation.reasons
  });
  
  let bestMission = null;
  
  missions.forEach(
    mission => {
      if(bestMission === null || mission.priority > bestMission.priority)
      bestMission = mission;
    }
  );
  
  return bestMission;
}