const { tenPinBowlingScoreCalculator } = require("../../main/tenPinBowling");

describe('Bowling tests', () => {
test('that we return the correct score, when all entries are 0 ', () => {
//Arrange
const scoreUnderTen = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const expectedScore = 0
//Act
const Result = tenPinBowlingScoreCalculator(scoreUnderTen);
//Expect
expect(Result).toEqual(expectedScore)
  });

  test('that we return the correct score, when all entries are 1 ', () => {
    //Arrange
    const scoreUnderTen = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    const expectedScore = 20
    //Act
    const Result = tenPinBowlingScoreCalculator(scoreUnderTen);
    //Expect
    expect(Result).toEqual(expectedScore)
      });
});