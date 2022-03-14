const { response } = require('express');
const { validationResult } = require('express-validator');

//
const addProduct = (req, res = response) => {
  const { SKU, code, name, description, pictures, price, currency, __v } =
    req.body;
  return res.json({
    _id: '618ab22bd78d227e609eeb9e',
    SKU,
    code,
    name,
    description,
    pictures,
    price,
    currency,
    __v,
  });
};

//
const apiProducts = (req, res) => {
  return res.json({
    ok: true,
  });
};

module.exports = {
  addProduct,
  apiProducts,
};
