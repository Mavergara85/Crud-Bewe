const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: false
  },
  categoria: {
    type: String,
    required: true
  },
  disponible: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Producto', ProductoSchema);

