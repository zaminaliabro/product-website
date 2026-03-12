const express = require("express");
const router = express.Router();
const controller = require("../controller/controler");

router.post("/product", controller.createProduct);
router.get("/products", controller.getProduct);
router.get("/product/:id", controller.findProduct);
router.put("/product/:id", controller.updateProduct);
router.delete("/product/:id", controller.deleteProduct);

module.exports = router;
