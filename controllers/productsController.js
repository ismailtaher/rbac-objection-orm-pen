const productDal = require('../dal/productDal');

const getAllProducts = async (req, res) => {
  const products = await productDal.getAllProducts();
  res.json(products);
};

const createNewProduct = async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'name and price are required' });
  }

  const newProduct = await productDal.createProduct(name, price);
  res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    return res
      .status(400)
      .json({ message: 'product id, name and price are required' });
  }

  const existingProduct = await productDal.getProductById(id);

  if (!existingProduct) {
    return res
      .status(400)
      .json({ message: `Product with ID ${req.body.id} not found` });
  }

  const updatedProduct = await productDal.updateProduct(id, name, price);

  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.body;
  const existingProduct = await productDal.getProductById(id);

  if (!existingProduct) {
    return res
      .status(400)
      .json({ message: `Product with ID ${req.body.id} not found` });
  }

  await productDal.deleteProduct(id);

  const products = await productDal.getAllProducts();

  res.json(products);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productDal.getProductById(id);

  if (!product) {
    return res
      .status(400)
      .json({ message: `Product ID ${req.params.id} not found` });
  }

  res.json(product);
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getProduct,
};
