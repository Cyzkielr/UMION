function getRecommendedFounder() {
  
  const founders = getIncompleteFounders();
  let bestFounder = null;
  let highestScore = -1;
  let bestReasons = null;
  
  founders.forEach(
    founder => {
      const result = scoreFounder(founder);
      
      if(result > highestScore){
        highestScore = score;
        bestFounder = founder;
        bestReasons = reasons;
      }
    }
  );
  
  return{
    founder : bestFounder,
    score : highestScore,
    reasons : bestReasons
  };
}