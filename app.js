const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let expenses = [];

app.get('/expenses', (req, res) => {
    res.json(expenses);
});

app.post('/expenses', (req, res) => {
    const expense = req.body;
    expenses.push(expense);
    res.json({ message: 'Added', expense });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});