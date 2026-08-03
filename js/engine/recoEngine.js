function getRecommendedFounder() {
  
  const founders = getIncompleteFounders();
  let bestFounder = null;
  let highestScore = -1;
  
  founders.forEach(
    founder => {
      const score = scoreFounder(founder);
      
      if(score > highestScore){
        highestScore = score;
        bestFounder = founder;
      }
    }
  );
  
  return{
    founder : bestFounder,
    score : highestScore
  };
}