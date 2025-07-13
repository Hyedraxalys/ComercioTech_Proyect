const express = require('express');
const bodyParser = require('body-parser');
// Importar funciones de los modelos
const {
  getAllClientes,
  createCliente,
  updateCliente,
  deleteCliente
} = require('./models/clientesModel');
const {
  getAllProductos,
  createProducto,
  updateProducto,
  deleteProducto
} = require('./models/productosModel');
const {
  getAllPedidos,
  createPedido,
  updatePedido,
  deletePedido
} = require('./models/pedidosModel');

const app = express();
const PORT = 3001; // Puerto estandar para servidores en desarrollo

// Hace que express pueda entender cada vez que resiba peticiones en formato JSON 
app.use(bodyParser.json());

// --- RUTAS CLIENTES ---

// Obtener todos los clientes
app.get('/api/clientes', async (req, res) => {
  try {
    const clientes = await getAllClientes();
    res.json(clientes);
  }
  catch (error) {
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

// Crear un nuevo cliente
app.post('/api/clientes', async (req, res) => {
  try {
    const nuevoCliente = req.body;
    const result = await createCliente(nuevoCliente);
    res.status(201).json({ message: 'Cliente creado', id: result.insertedId });
  }
  catch (error) {
    res.status(500).json({ error: 'Error al crear cliente' });
  }
});

// Actualizar un cliente por ID
app.put('/api/clientes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;
    const result = await updateCliente(id, datosActualizados);
    res.json({ message: 'Cliente actualizado', result });
  } 
  catch (error) {
    res.status(500).json({ error: 'Error al actualizar cliente' });
  }
});

// Eliminar un cliente por ID
app.delete('/api/clientes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteCliente(id);
    res.json({ message: 'Cliente eliminado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
});

// --- RUTAS PRODUCTOS ---

// Obtener todos los productos
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await getAllProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Crear un nuevo producto
app.post('/api/productos', async (req, res) => {
  try {
    const nuevoProducto = req.body;
    const result = await createProducto(nuevoProducto);
    res.status(201).json({ message: 'Producto creado', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
});

// Actualizar un producto por ID
app.put('/api/productos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;
    const result = await updateProducto(id, datosActualizados);
    res.json({ message: 'Producto actualizado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

// Eliminar un producto por ID
app.delete('/api/productos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteProducto(id);
    res.json({ message: 'Producto eliminado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

// --- RUTAS PEDIDOS ---

// Obtener todos los pedidos
app.get('/api/pedidos', async (req, res) => {
  try {
    const pedidos = await getAllPedidos();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
});

// Crear un nuevo pedido
app.post('/api/pedidos', async (req, res) => {
  try {
    const nuevoPedido = req.body;
    const result = await createPedido(nuevoPedido);
    res.status(201).json({ message: 'Pedido creado', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear pedido' });
  }
});

// Actualizar un pedido por ID
app.put('/api/pedidos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;
    const result = await updatePedido(id, datosActualizados);
    res.json({ message: 'Pedido actualizado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar pedido' });
  }
});

// Eliminar un pedido por ID
app.delete('/api/pedidos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deletePedido(id);
    res.json({ message: 'Pedido eliminado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar pedido' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
