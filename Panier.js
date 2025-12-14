const nameInput = document.getElementById("productName");
const qtyInput = document.getElementById("quantity");
const addBtn = document.getElementById("addBtn");
const cart = document.getElementById("cart");
const emptyMsg = document.getElementById("empty");
const totalSpan = document.getElementById("total");

addBtn.addEventListener("click", addProduct);

function addProduct() {
  const name = nameInput.value;
  const qty = qtyInput.value;

  
  if (name === "" || isNaN(qty) || qty <= 0) {
    alert("Champs invalides");
    return;
  }
emptyMsg.style.display = "none";
  const li = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  const qtySpan = document.createElement("span");
  qtySpan.textContent = qty;

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "-";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Supprimer";


  plusBtn.addEventListener("click", () => {
    qtySpan.textContent++;
    updateTotal();
  });


  minusBtn.addEventListener("click", () => {
    if (qtySpan.textContent > 1) {
      qtySpan.textContent--;
      updateTotal();
    }
  });


  delBtn.addEventListener("click", () => {
    li.remove();
    updateTotal();
    checkEmpty();
  });

  li.appendChild(nameSpan);
  li.appendChild(minusBtn);
  li.appendChild(qtySpan);
  li.appendChild(plusBtn);
  li.appendChild(delBtn);

  cart.appendChild(li);

  updateTotal();

  nameInput.value = "";
  qtyInput.value = "";
}
function updateTotal() {
  let total = 0;

  for (let item of cart.children) {
    total +=parseInt(item.children[2].textContent);
  }

  totalSpan.textContent = total;
}
function checkEmpty() {
  if (cart.children.length === 0) {
    emptyMsg.style.display = "block";
    totalSpan.textContent = 0;
  }
}