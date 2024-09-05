
const ctx = document.getElementById('expense-chart').getContext('2d');
let expenseChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            label: 'Expenses',
            data: [],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
    },
});

function updateChart() {
    const expenses = getExpenses();
    expenseChart.data.labels = expenses.map(expense => expense.name);
    expenseChart.data.datasets[0].data = expenses.map(expense => expense.amount);
    expenseChart.update();
}
