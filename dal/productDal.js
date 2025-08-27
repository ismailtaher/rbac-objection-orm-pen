const Product = require('../db/models/Product');

const getAllProducts = async () => {
  // const products = await knex('products');
  const products = await Product.query();
  return products;
};

const getProductById = async (id) => {
  const result = await Product.query().findById(id);
  return result;
};

const createProduct = async (name, price) => {
  const result = await Product.query().insert({
    name,
    price,
  });
  return result;
};

const updateProduct = async (id, name, price) => {
  const result = await Product.query().findById(id).patchAndFetchById(id, {
    name,
    price,
  });
  return result;
};

const deleteProduct = async (id) => {
  await Product.query().deleteById(id);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
