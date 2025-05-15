const { tenPinBowlingScoreCalculator } = require("../../main/tenPinBowling");

describe("Bowling tests", () => {
  test("that we return the correct score, when all entries are 0 ", () => {
    //Arrange
    const scoreUnderTen = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    const expectedScore = 0;
    //Act
    const Result = tenPinBowlingScoreCalculator(scoreUnderTen);
    //Expect
    expect(Result).toEqual(expectedScore);
  });

  test("that we return the correct score, when all entries are 1 ", () => {
    //Arrange
    const scoreUnderTen = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    const expectedScore = 20;
    //Act
    const Result = tenPinBowlingScoreCalculator(scoreUnderTen);
    //Expect
    expect(Result).toEqual(expectedScore);
  });

  test("that we return the correct score, when you have one spare ", () => {
    //Arrange
    const scoreUnderTen = [
      9, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    const expectedScore = 12;
    //Act
    const Result = tenPinBowlingScoreCalculator(scoreUnderTen);
    //Expect
    expect(Result).toEqual(expectedScore);
  });

  test("that we return the correct score, when you have a strike ", () => {
    //Arrange
    const scoreUnderTen = [
      10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    const expectedScore = 14;
    //Act
    const Result = tenPinBowlingScoreCalculator(scoreUnderTen);
    //Expect
    expect(Result).toEqual(expectedScore);
  });

  test("that we return the correct score, when you have all strikes ", () => {
    //Arrange
    const scoreUnderTen = [
      10, 10,10,10,10,10,10,10,10,10
    ];
    const expectedScore = 270;
    //Act
    const Result = tenPinBowlingScoreCalculator(scoreUnderTen);
    //Expect
    expect(Result).toEqual(expectedScore);
  });
});
