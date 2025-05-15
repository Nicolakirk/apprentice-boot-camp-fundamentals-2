const { calculateBilling } = require("../../main/calculateBilling");

describe("billing test", () => {
  test("that we return the correct billing amount when there are no adverts and no products  ", () => {
    //Arrange
    const customerType = 'Dealer'
    const advertQuantity = 0
    const products = []
    const expectedBilling = "£0"
    //Act
    const Result = calculateBilling(customerType, advertQuantity, products);
    //Expect
    expect(Result).toEqual(expectedBilling);
  });
});

describe("billing test for Dealers", () => {
  test("that we return the correct billing amount for a Dealer when there are 20 adverts, and 1 product  ", () => {
    //Arrange
    const customerType = 'Dealer'
    const advertQuantity = 20
    const products = ['Advert promotion']
    const expectedBilling = '£1200'
    //Act
    const Result = calculateBilling(customerType, advertQuantity, products);
    //Expect
    expect(Result).toEqual(expectedBilling);
  });

  test("that we return the correct billing amount for a Dealer when there are 1000 adverts, and 2 products  ", () => {
    //Arrange
    const customerType = 'Dealer'
    const advertQuantity = 1000
    const products = ['Finance', 'Valutaions']
    const expectedBilling = '£70000'
    //Act
    const Result = calculateBilling(customerType, advertQuantity, products);
    //Expect
    expect(Result).toEqual(expectedBilling);
  });
});
describe("billing test for Private customer", () => {
  test("that we return the correct billing amount when there are 3 adverts and no products  ", () => {
    //Arrange
    const customerType = 'Private'
    const advertQuantity = 3
    const products = []
    const expectedBilling = "£60"
    //Act
    const Result = calculateBilling(customerType, advertQuantity, products);
    //Expect
    expect(Result).toEqual(expectedBilling);
  });

  test("that we return the correct billing amount when there are  adverts and  products  ", () => {
    //Arrange
    const customerType = 'Private'
    const advertQuantity = 1
    const products = ['100 images']
    const expectedBilling = "£30"
    //Act
    const Result = calculateBilling(customerType, advertQuantity, products);
    //Expect
    expect(Result).toEqual(expectedBilling);
  });
});