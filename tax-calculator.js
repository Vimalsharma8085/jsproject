
document.getElementById('calculate-tax').addEventListener('click', function() {
    const income = parseFloat(document.getElementById('income').value);
    const tax = calculateTax(income);
    document.getElementById('tax-amount').innerText = `Estimated Tax: ₹${tax.toFixed(2)}`;
});

function calculateTax(income) {
    if (income <= 300000) return 0;
    else if (income <= 500000) return income * 0.03;
    else if (income <= 700000) return income * 0.08;
    else if (income <= 1000000) return income * 0.08;
    else if (income <= 1200000) return income * 0.12;
    else if (income <= 1500000) return income * 0.14;
    else if (income <= 2000000) return income * 0.20;
    else return income * 0.30;
}

