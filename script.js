document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.Login-form form');
    const customerForm = document.getElementById('customerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            if (username === 'ADMIN' && password === 'esit45') {
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (customerForm) {
        customerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            addCustomer();
        });

        const cancelButton = customerForm.querySelector('button[type="button"]');
        if (cancelButton) {
            cancelButton.onclick = () => {
                customerForm.reset();
            };
        }
    }
});

//store data in the form to the dashboard
function addCustomer() {
    const form = document.getElementById("customerForm");
    let name = form.name.value;
    let email = form.email.value;
    let source = form.source.value;
    let status = form.status.value;
    let notes = form.notes.value;

    if (name.trim() !== "" && source.trim() !== "" && status.trim() !== "") {
        let table = document.getElementById("customerTable");
        let row = table.insertRow();

        row.innerHTML = `<td>${name}</td><td>${email}</td><td>${source}</td><td><button onclick="updateStatus(this)">${status}</button></td><td>${notes}</td>`;

        form.reset();
    }
}
function updateStatus(button) {
    const statuses = ["New", "Contacted", "Converted"];
    let currentIndex = statuses.indexOf(button.innerText);
    let nextIndex = (currentIndex + 1) % statuses.length;
    button.innerText = statuses[nextIndex];
}




