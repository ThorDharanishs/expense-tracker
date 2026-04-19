const API = "/expenses";

async function fetchExpenses() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("expense-list");
    list.innerHTML = "";

    let total = 0;

    data.forEach((exp, index) => {
        total += Number(exp.amount);

        const li = document.createElement("li");
        li.innerHTML = `
            ${exp.title} - ₹${exp.amount}
            <button onclick="deleteExpense(${index})">✖</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("total").textContent = `Total: ₹${total}`;
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

function deleteExpense(index) {
    // simple frontend removal (no backend delete)
    fetchExpenses();
}

fetchExpenses();