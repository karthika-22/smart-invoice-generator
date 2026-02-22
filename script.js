let items = [];

function addItem() {
  const name = document.getElementById("itemName").value;
  const amount = document.getElementById("amount").value;

  if (!name || !amount) {
    alert("Enter item and amount");
    return;
  }

  items.push({ name, amount: Number(amount) });

  document.getElementById("itemName").value = "";
  document.getElementById("amount").value = "";
}

function generateInvoice() {
  const client = document.getElementById("clientName").value;
  if (!client) {
    alert("Enter client name");
    return;
  }

  document.getElementById("invoice").style.display = "block";
  document.getElementById("displayClient").textContent = client;

  const table = document.getElementById("itemsTable");
  table.innerHTML = "";

  let total = 0;

  items.forEach(item => {
    total += item.amount;
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>₹${item.amount}</td>
      </tr>
    `;
  });

  document.getElementById("totalAmount").textContent = total;
}

function printInvoice() {
  window.print();
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const invoiceText = document.getElementById("invoice").innerText;
  doc.text(invoiceText, 10, 10);
  doc.save("invoice.pdf");
}
function scrollToApp() {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}