function isEligibleToVote(age) {
    return age >= 18;
 }
 
 
 // Arrange
 const number = 19; // Example number to test
 const expected = true; // Expected result for this number
 
 // Act
 const result = isEligibleToVote(number);
 
 // Assert
 if (result === expected) {
    console.log('Test passed!');
 } else {
    console.log(`Test failed. Expected ${expected}, but got ${result}.`);
 }
 
 // Arrange
 const secondNumber = 9; // Example number to test
 const secondExpected = false ; // Expected result for this number
 
 // Act
 const secondResult = isEligibleToVote(secondNumber);
 
 // Assert
 if (secondResult === secondExpected) {
    console.log('Test passed!');
 } else {
    console.log(`Test failed. Expected ${secondExpected}, but got ${secondResult}.`);
 }
 
 // Arrange
 const eighteenNumber = 18; // Example number to test
 const eighteenExpected = true ; // Expected result for this number
 
 // Act
 const eighteenResult = isEligibleToVote(eighteenNumber);
 
 // Assert
 if (eighteenResult === eighteenExpected) {
    console.log('Test passed!');
 } else {
    console.log(`Test failed. Expected ${eighteenExpected}, but got ${eighteenResult}.`);
 }