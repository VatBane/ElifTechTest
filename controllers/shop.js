const Product = require('../models/Product')
const Shop = require('../models/Shop')

const getAllProducts = async (req, res) => {
  try {
    const {shop: shopAlias} = req.params;
    const shop = await Shop.findOne({urlAlias: shopAlias});
    if (!shop) {
      return res.status(404).json({msg: `There is no such a shop`})
    }
    const products = await Product.find({shop: shop.name});
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

const getAllShops = async (req, res) => {
  try {
    const shops = await Shop.find({});
    res.status(200).json({ shops });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  getAllShops,
}