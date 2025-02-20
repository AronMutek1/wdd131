// Array to store transactions
let transactions = [];

// On page load, check localStorage for saved transactions
document.addEventListener('DOMContentLoaded', () => {
  const storedTransactions = localStorage.getItem('transactions');
  if (storedTransactions) {
    transactions = JSON.parse(storedTransactions);
    renderTransactions();
    updateBalance();
  }
  
  // Only attach form event listener if the tracker form exists (tracker page)
  const form = document.getElementById('transactionForm');
  if (form) {
    form.addEventListener('submit', addTransaction);
  }
});

// Function to add a transaction
function addTransaction(event) {
  event.preventDefault();
  
  // Get form values using DOM selection
  const type = document.getElementById('type').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;
  
  // Validate input using conditional branching
  if (isNaN(amount) || amount <= 0) {
    alert(`Please enter a valid amount for ${type}.`);
    return;
  }
  
  // Create a transaction object
  const transaction = { type, amount, category, date };
  
  // Add the transaction using an array method
  transactions.push(transaction);
  
  // Save to localStorage
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
  // Update the DOM with the new transaction and balance
  renderTransactions();
  updateBalance();
  
  // Clear the form using template literals to build the reset message (if needed)
  event.target.reset();
}

// Function to render transactions in the list
function renderTransactions() {
  const transactionList = document.getElementById('transactionList');
  if (!transactionList) return;
  
  // Clear previous list
  transactionList.innerHTML = '';
  
  // Use template literals to create list items
  transactions.forEach((t, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${index + 1}. ${t.type === 'income' ? 'Income' : 'Expense'}: $${t.amount.toFixed(2)} - ${t.category} on ${t.date}`;
    transactionList.appendChild(listItem);
  });
}

// Function to update the current balance
function updateBalance() {
  let balance = 0;
  transactions.forEach(t => {
    balance += (t.type === 'income' ? t.amount : -t.amount);
  });
  
  const balanceHeading = document.getElementById('balanceHeading');
  if (balanceHeading) {
    balanceHeading.textContent = `Current Balance: $${balance.toFixed(2)}`;
  }
}
