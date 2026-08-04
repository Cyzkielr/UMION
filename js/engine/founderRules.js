function founderIsCompleted(founder) {
  return founder.completed;
}

function evaluatePreferredSpark(founder) {
  if(founderMatchedPreferredSpark(founder))
    return{
      passed : true,
      points : FOUNDER_SCORE.PREFERRED_SPARK,
      reason : "Marches Preferred Spark",
    };
    
    return{
      passed : false,
      points : 0,
      reason : null
    };
}

function evaluateNeedsTraining(founder) {
  if(founderNeedsTraining(founder))
    return{
      passed : true,
      points : FOUNDER_SCORE.NEEDS_TRAINING,
      reason : "Needs Training"
    };
    
    return{
      passed : false,
      points : 0,
      reason : null
    };
}

function evaluateHasDeck(founder) {
  if(founderHasDeck(founder))
    return{
      passed : true,
      points : FOUNDER_SCORE.HAS_DECK,
      reason : "Has Deck"
    };
    
    return{
      passed : false,
      points : 0,
      reason : null
    }
}