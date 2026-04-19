const express = require('express');
const app = express();

app.use(express.json());

let expenses = [];

app.get('/', (req, res) => {
    res.send('Expense Tracker Running');
});

app.get('/expenses', (req, res) => {
    res.json(expenses);
});

app.post('/expenses', (req, res) => {
    const expense = req.body;
    expenses.push(expense);
    res.json({ message: 'Expense added', expense });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});