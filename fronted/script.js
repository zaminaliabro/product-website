const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const color = document.getElementById("color").value;
  const image = document.getElementById("image").value;

  await fetch("http://localhost:3000/api/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, description, color, image }),
  });

  alert("Product Added Successfully ✅");
  form.reset();
  fetchProducts();
});

const fetchProducts = async () => {
  const productShow = document.getElementById("productShow");
  if (!productShow) return;

  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  productShow.innerHTML = "";
  data.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product-card");
    productElement.innerHTML = `
    <img src="${product.image || "https://picsum.photos/200"}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Description: ${product.description}</p>
            <p>Color: ${product.color}</p>
            <button class="delete-btn" onclick="deleteProduct('${product._id}')">Delete</button>

          `;

    productShow.appendChild(productElement);
  });
};
const deleteProduct = async (id) => {
  await fetch(`http://localhost:3000/api/product/${id}`, {
    method: "DELETE",
  });

  alert("Product Deleted ❌");
  fetchProducts();
};

fetchProducts();
