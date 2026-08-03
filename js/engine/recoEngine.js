function getRecommendedFounder() {
  const incomplete = getIncompleteFounders();
  
  if(incomplete.length === 0)
    return null;
  
  return incomplete[0];
}