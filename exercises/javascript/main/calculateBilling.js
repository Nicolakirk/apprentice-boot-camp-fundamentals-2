exports.calculateBilling = (customerType, advertQuantity, products) => {
  let totalBill = 0;
  let advertCost;
  let productCost = 10;
  let productTotals = products.length;
 
  customerType === 'Dealer' ? advertCost = 50 : advertCost = 20;
  
  totalBill =
    (advertQuantity * advertCost) + (productTotals * productCost * advertQuantity);
  return `£${totalBill}`;
};
