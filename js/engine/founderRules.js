function founderIsCompleted(founder) {
  return founder.completed;
}

function founderMatchedPreferredSpark(founder) {
  const config = getConfig();
  
  return(founder.spark === config.preferredSpark);
}

function founderNeedsTraining(founder) {
  return !founder.completed;
}

function founderHasDeck(founder) {
  return getDecks().some(
    deck => deck.founder === founder.name
  );
}

function evaluatePreferredSpark(founder) {
  if(founderMatchedPreferredSpark(founder))
    return{
      passed : true,
      points : FOUNDER_SCORE.PREFERRED_SPARK,
      reason : "Matches Preferred Spark",
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
    };
}