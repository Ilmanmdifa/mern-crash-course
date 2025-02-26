import express from "express";

import {
  createProduct,
  updateProduct,
  getProducts,
  deleteProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
