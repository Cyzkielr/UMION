function getSupportCount() {
  return getOwnedSupportCards().length;
}

function getUmaCount() {
  return getOwnedUma().length;
}

function getFounderCount() {
  return getFounders().length;
}

function getCompletedFounderCount() {
  return getCompletedFounders().length;
}

function getIncompleteFounderCount() {
  return getIncompleteFounders().length;
}

function getFounderCompletionRate() {
  const total = getFounderCount();
  
  if (total === 0)
    return 0;
    
  return Math.round(getCompletedFounderCount()/total*100);
}

function getDeckCount() {
  return getDecks().length;
}

function getSupportCompletion() {
  const owned = getOwnedSupportCards().length;
  const total = getSupportCards().length;
  
  if(total === 0)
    return 0;
  return Math.round(owned/total*100);
}

function getDashboardStats() {
  return{
    supoka : getOwnedSupportCards().length,
    uma : getOwnedUma().length,
    founders : getFounders().length,
    completedFounders : getCompletedFounders().length,
    incompleteFounders : getIncompleteFounders().length,
    completion : getFounderCompletionRate(),
    decks : getDecks().length
  };
}