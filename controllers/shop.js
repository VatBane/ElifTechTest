const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

const getProduct = async (req, res) => {
  try {
    const { id: prodID } = req.params;
    const product = await Product.findOne({ _id: prodID });
    if (!product) {
      return res
        .status(404)
        .json({ msg: `There is no product with id: ${prodID}` });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id: prodID } = req.params;
    const { name, price } = req.body;

    const product = await Product.findOneAndUpdate({ _id: prodID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res
        .status(404)
        .json({ msg: `There is no product with id: ${prodID}` });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id: prodID } = req.params;
    const product = await Product.findOneAndDelete({ _id: prodID });
    if (!product) {
      return res
        .status(404)
        .json({ msg: `There is no product with id: ${prodID}` });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}