function getRecommendedFounder() {
  
  const config = getConfig();
  const founders = getIncompleteFounders();
  let bestFounder = null;
  let highestScore = -1;
  let bestReasons = [];
  
  founders.forEach(
    founder => {
      const result = scoreFounder(founder);
      
      if(result.score > highestScore){
        highestScore = result.score;
        bestFounder = founder;
        bestReasons = result.reasons;
      }
    }
  );
  
  return{
    founder : bestFounder,
    score : highestScore,
    reasons : bestReasons
  };
}