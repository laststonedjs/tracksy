import { Router } from "express";
import { createProduct, deleteProduct, getProducts } from "../controllers/productController.js";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;