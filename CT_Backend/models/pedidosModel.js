const { connectDB } = require('../conection');

// Obtener todos los pedidos
async function getAllPedidos() {
  const db = await connectDB();
  return db.collection('pedidos').find().toArray();
}

// Crear un nuevo pedido
async function createPedido(pedido) {
  const db = await connectDB();
  return db.collection('pedidos').insertOne(pedido);
}

// Actualizar un pedido por ID
async function updatePedido(id, datosActualizados) {
  const db = await connectDB();
  return db.collection('pedidos').updateOne(
    { _id: id },
    { $set: datosActualizados }
  );
}

// Eliminar un pedido por ID
async function deletePedido(id) {
  const db = await connectDB();
  return db.collection('pedidos').deleteOne({ _id: id });
}

module.exports = {
  getAllPedidos,
  createPedido,
  updatePedido,
  deletePedido
};
