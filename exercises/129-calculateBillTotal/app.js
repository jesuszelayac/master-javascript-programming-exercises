function calculateBillTotal(preTaxAndTipAmount) {
    const taxRate = 0.095;
    const tipRate = 0.15;

    const taxAmount = preTaxAndTipAmount * taxRate;
    const tipAmount = preTaxAndTipAmount * tipRate;
    const totalAmount = preTaxAndTipAmount + taxAmount + tipAmount;

    return totalAmount;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
