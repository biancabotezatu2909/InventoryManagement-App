import {Router} from "express";
import { createProduct, getProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts); //http://localhost:8000/products
router.post("/", createProduct);

export default router;