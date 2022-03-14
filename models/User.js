const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  SKU: { type: String, require: true },
  code: { type: Number, require: true },
  description: { type: String, require: true },
  pictures: { type: Array, require: true },
  price: { type: Number, require: true },
  currency: { type: String, require: true },
  __v: { type: Number, require: true },
});

module.exports = model('User', UserSchema);
