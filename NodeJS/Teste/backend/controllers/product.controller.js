import { Product } from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, quantity, price } = req.body;
  const newProduct = await Product.create({ name, quantity, price });
  res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.status(204).send();
};