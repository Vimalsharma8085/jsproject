let expenses = [];
let budget = 0;

document.getElementById('set-budget').addEventListener('click', function() {
    const inputBudget = parseFloat(document.getElementById('budget-amount').value);
    
    if (!isNaN(inputBudget) && inputBudget > 0) {
        budget = inputBudget;
        document.getElementById('budget-amount').value = ''; 
        alert(`Budget set to ₹${budget.toFixed(2)}`);
        
        document.getElementById('budget').innerText = `₹${budget.toFixed(2)}`;

        document.getElementById('set-budget').innerText = 'Budget Set';
        document.getElementById('set-budget').disabled = true;
        
        document.getElementById('add-expense').disabled = false; 
    } else {
        alert('Please enter a valid budget amount.');
    }
});


document.getElementById('add-expense').addEventListener('click', function() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (budget === 0) {
        alert('Please set a budget first.');
        return; 
    }

    if (name && !isNaN(amount) && amount > 0) {
        addExpense(name, amount);
        updateChart(); // Assuming updateChart is a function for updating your chart
        
        const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
        if (totalExpenses > budget) {
            alert('You have exceeded your budget limit!');
        }
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    } else {
        alert('Please enter valid expense name and amount.');
    }
});

function addExpense(name, amount) {
    expenses.push({ name, amount });
}

function getExpenses() {
    return expenses;
}

