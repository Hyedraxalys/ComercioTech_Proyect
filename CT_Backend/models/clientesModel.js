const { connectDB } = require('../conection');

// Obtener todos los clientes
async function getAllClientes() {
  const db = await connectDB();
  return db.collection('clientes').find().toArray();
}

// Crear un nuevo cliente
async function createCliente(cliente) {
  const db = await connectDB();
  return db.collection('clientes').insertOne(cliente);
}

// Actualizar un cliente por ID
async function updateCliente(id, datosActualizados) {
  const db = await connectDB();
  return db.collection('clientes').updateOne(
    { _id: id },
    { $set: datosActualizados }
  );
}

// Eliminar un cliente por ID
async function deleteCliente(id) {
  const db = await connectDB();
  return db.collection('clientes').deleteOne({ _id: id });
}

module.exports = {
  getAllClientes,
  createCliente,
  updateCliente,
  deleteCliente
};
