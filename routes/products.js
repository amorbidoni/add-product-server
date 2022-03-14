const { Router } = require('express');
const { check } = require('express-validator');
const { addProduct, apiProducts } = require('../controllers/products');
const { validarCampos } = require('../middlewares/validators');

const router = Router();

// get

router.post('/', apiProducts);

router.post(
  '/addproduct',
  [
    check('SKU', 'Campo oblicagorio').isString(),
    check('code', 'Campo oblicagorio').isNumeric(),
    check('name', 'Campo oblicagorio').isString(),
    check('description', 'Campo oblicagorio').isString(),
    check('pictures', 'Campo oblicagorio').isArray(),
    check('price', 'Campo oblicagorio').isNumeric(),
    check('currency', 'Campo oblicagorio').isString(),
    check('__v', 'Campo oblicagorio').isNumeric(),
    validarCampos,
  ],
  addProduct
);

module.exports = router;
