const Product = require("../models/auth");

async function createProduct(req, res) {
  try {
    const { name, price, description, color, image } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      color,
      image,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create product" });
  }
}
async function getProduct(req, res) {
  try {
    console.log("reached");
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log("Error");
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
async function findProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
}
async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { name, price, description, color, image } = req.body;

    console.log("reached update");

    const product = await Product.findByIdAndUpdate(
      id, // id directly pass karte hain
      { name, price, description, color, image },
      { returnDocument: "after" },
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update product" });
  }
}
async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
}

module.exports = {
  createProduct,
  getProduct,
  findProduct,
  updateProduct,
  deleteProduct,
};
