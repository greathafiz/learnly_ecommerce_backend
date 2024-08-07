import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";
import { createProductSchema } from "../validators/productValidator.js";
import validateRequest from "../middlewares/validationMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(authMiddleware, validateRequest(createProductSchema), createProduct)
  .get(getAllProducts);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch(authMiddleware, updateProduct)
  .delete(authMiddleware, deleteProduct);

export default router;
