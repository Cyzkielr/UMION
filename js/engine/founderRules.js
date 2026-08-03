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