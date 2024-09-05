
document.addEventListener('DOMContentLoaded', async function() {
    updateAdvice();

    document.getElementById('add-expense-button').addEventListener('click', async function() {
        updateAdvice();
    });
});

async function updateAdvice() {
    const expenses = getExpenses(); 
    const aiAdvice = await fetchAIAdvice(expenses); 
    displayAdvice(expenses, aiAdvice);
}

async function fetchAIAdvice(expenses) {
    try {
        const response = await fetch('https://api.example.com/ai-advice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ expenses }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.advice;
    } catch (error) {
        console.error('Error fetching AI advice:', error);
        return null; 
    }
}

function displayAdvice(expenses, aiAdvice) {
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    let advice = "";

    if (totalExpenses > 2000) {
        advice = "Your expenses are significantly high. It's crucial to analyze where your money is going and adjust your budget accordingly.";
    } else if (totalExpenses > 1500) {
        advice = "Your spending is quite high. Review your budget and cut down on major expenses.";
    } else if (totalExpenses > 1000) {
        advice = "You're spending too much! Consider cutting down on unnecessary expenses.";
    } else if (totalExpenses >= 500) {
        advice = "You're doing well! Keep tracking your expenses.";
    } else { 
        advice = "Great job on keeping your expenses low! Keep up the good work.";
    }
    if (aiAdvice) {
        advice += ` AI Suggestion: ${aiAdvice}`;
    }

    document.getElementById('advice-text').innerText = advice;
}



