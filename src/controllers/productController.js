import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
  const { name, description, price, imageURL } = req.body;

  const product = new Product({
    name: name,
    description: description,
    price: price,
    imageURL: imageURL,
    createdBy: req.user._id,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json({ msg: "Product is added", newProduct });
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  const { name } = req.query;

  try {
    const filter = name ? { name } : {};
    const products = await Product.find(filter).populate("createdBy");
    res.json({ products });
  } catch (error) {
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  const { id: productId } = req.params;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).json(`No product with id: ${productId}`);
    }

    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const { id: productId } = req.params;

  try {
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      res.status(404).json(`No product with id: ${productId}`);
    }

    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { id: productId } = req.params;

  try {
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      res.status(404).json(`No product with id: ${productId}`);
    }

    res.json({ msg: "Product deleted" });
  } catch (error) {
    next(error);
  }
};
