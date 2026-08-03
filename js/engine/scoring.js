function scoreFounder(founder) {
  let score = 0;
  if(founderNeedsTraining(founder))
    score += 50;
  if(founderMatchedPreferredSpark())
    score += 30;
  return score;
}