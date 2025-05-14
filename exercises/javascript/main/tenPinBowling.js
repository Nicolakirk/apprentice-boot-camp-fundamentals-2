exports.tenPinBowlingScoreCalculator = (score) => {
  return score.reduce((accum, curr)=> accum + curr, 0)
}




