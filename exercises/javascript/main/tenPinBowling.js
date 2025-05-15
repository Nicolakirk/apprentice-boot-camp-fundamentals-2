exports.tenPinBowlingScoreCalculator = (rolls) => {
  let totalScore = 0;
  let frame = 0;

  for (let i = 0; i < rolls.length && frame < 10; i += 2) {
    if (rolls[i] === 10) {
      // Strike
      totalScore += 10 + (rolls[i + 1] ?? 0) + (rolls[i + 2] ?? 0);
      i -= 1; //  adjust loop
    } else {
      let frameScore = (rolls[i] ?? 0) + (rolls[i + 1] ?? 0);
      
      if (frameScore === 10) {
        // Spare
        totalScore += 10 + (rolls[i + 2] ?? 0);
      } else {
       
        totalScore += frameScore;
      }
    }

    frame++; 
  }

  return totalScore;
};

