import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  res.send("create product");
};

export const getAllProducts = async (req, res) => {
  res.send("get all products");
};

export const getSingleProduct = async (req, res) => {
  res.send("get a product");
};

export const updateProduct = async (req, res) => {
  res.send("update product");
};

export const deleteProduct = async (req, res) => {
  res.send("delete product");
};
