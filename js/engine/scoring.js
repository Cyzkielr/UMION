function scoreFounder(founder) {
  let score = 0;
  if(founderNeedsTraining(founder))
    score += FOUNDER_SCORE.NEEDS_TRAINING;
  if(founderMatchedPreferredSpark(founder))
    score += FOUNDER_SCORE.PREFERRED_SPARK;
  if(founderHasDeck(founder))
    score += FOUNDER_SCORE.HAS_DECK;
  return score;
}