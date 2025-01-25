function calculateFee() {
    // Get inputs
    const months = parseFloat(document.getElementById('months').value) || 6;
    const members = parseFloat(document.getElementById('members').value) || 20;
    const creditCardCharges = parseFloat(document.getElementById('creditCardCharges').value) || 0;
    const currencyRate = parseFloat(document.getElementById('currencyRate').value) || 86;

    // Static values
    const charterFee = 125; // USD
    const newMemberFee = 20; // USD
    const monthlyFee = 10; // USD
    const gstRate = 0.18; // 18%

    // Calculations
    const totalMembershipFee = members * monthlyFee * months;
    const totalOneTimeFee = members * newMemberFee + charterFee;
    const gstAmount = (totalMembershipFee + totalOneTimeFee) * gstRate;
    const totalUSD = totalMembershipFee + totalOneTimeFee + gstAmount;
    const creditCardFee = totalUSD * (creditCardCharges / 100);
    const totalUSDWithCreditCard = totalUSD + creditCardFee;
    const totalINR = totalUSDWithCreditCard * currencyRate;

    const formattedUSD = totalUSDWithCreditCard.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const formattedINR = totalINR.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });


    // Update outputs
    document.getElementById('totalUSD').textContent = formattedUSD;
    document.getElementById('totalINR').textContent = formattedINR;
}
