const Product = require('../models/Product')
const Shop = require('../models/Shop')

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createShop = async (req, res) => {
  try {
    const shop = await Shop.create(req.body);
    res.status(201).json({ shop });
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
  createProduct,
  createShop,
  updateProduct,
  deleteProduct,
}