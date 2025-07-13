import MongoClient from 'mongodb';

const uri = 'mongodb://localhost:27017'; // Puerto MongoDB
const dbName = 'ComercioTech'; // Nombre de la base de datos

let client;

async function connectDB() {
  try{
    if (!client) {
      client = new MongoClient(uri);
      await client.connect();
      console.log('Conectado a MongoDB');
    }
    return client.db(dbName);
  }
  catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    throw error;
  }

}

export { connectDB };
