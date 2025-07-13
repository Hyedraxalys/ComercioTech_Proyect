const { connectDB } = require('../conection');

// Obtener todos los productos
async function getAllProductos() {
  const db = await connectDB();
  return db.collection('productos').find().toArray();
}

// Crear un nuevo producto
async function createProducto(producto) {
  const db = await connectDB();
  return db.collection('productos').insertOne(producto);
}

// Actualizar un producto por ID
async function updateProducto(id, datosActualizados) {
  const db = await connectDB();
  return db.collection('productos').updateOne(
    { _id: id },
    { $set: datosActualizados }
  );
}

// Eliminar un producto por ID
async function deleteProducto(id) {
  const db = await connectDB();
  return db.collection('productos').deleteOne({ _id: id });
}

module.exports = {
  getAllProductos,
  createProducto,
  updateProducto,
  deleteProducto
};
