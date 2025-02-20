// The product array of objects
const products = [
    { id: "p1", name: "Laptop" },
    { id: "p2", name: "Smartphone" },
    { id: "p3", name: "Headphones" },
    { id: "p4", name: "Smartwatch" },
    { id: "p5", name: "Bluetooth Speaker" }
  ];
  
  // Populate the product <select> with dynamic options
  window.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");
  
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.name; // or product.id if you want to store the id
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  