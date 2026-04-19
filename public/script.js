const API = "/expenses";

async function fetchExpenses() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("expense-list");
    list.innerHTML = "";

    data.forEach(exp => {
        const li = document.createElement("li");
        li.textContent = `${exp.title} - ₹${exp.amount}`;
        list.appendChild(li);
    });
}

async function addExpense() {
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;

    if (!title || !amount) return;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, amount })
    });

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";

    fetchExpenses();
}

fetchExpenses();