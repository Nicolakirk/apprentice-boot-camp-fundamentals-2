const dealerCostPerAdvert = 50;
const privateSellerCostPerAdvert = 20;
const costPerEnhancement = 10;

const calculateBill = (adAmount, isDealer, addOns ) => {
    let result = 0;
    if(isDealer === true && addOns === 0){
result = adAmount * dealerCostPerAdvert
    }
    else if(isDealer === true && addOns >= 1){
     
     result = adAmount * dealerCostPerAdvert + addOns * costPerEnhancement 
    }
    else if(!isDealer && addOns === 0){
        result = adAmount * privateSellerCostPerAdvert 
    }
    else if(!isDealer && addOns >= 1){
        result = adAmount *  privateSellerCostPerAdvert + addOns * costPerEnhancement
    }
    return result;
}



// Arrange
 const customerAds = 1000; // Example number to test
 const enhancements  = 1;
 const isadealer = true;
 const billExpected  =  50010; // Expected result for this number
 
 // Act
 const billResult = calculateBill(customerAds, isadealer, enhancements);
 
 // Assert
 if (billResult === billExpected) {
    console.log('Test passed!');
 } else {
    console.log(`Test failed. Expected ${billExpected}, but got ${billResult}.`);
 }

 const dealerAds2 = 3; // Example number to test
 const enhancements2  = 2;
 const dealer2 = false;
 const billExpected2  =  80; // Expected result for this number
 
 // Act
 const billResult2 = calculateBill(dealerAds2, dealer2, enhancements2);
 
 // Assert
 if (billResult2 === billExpected2) {
    console.log('Test passed!');
 } else {
    console.log(`Test failed. Expected ${billExpected2}, but got ${billResult2}.`);
 }