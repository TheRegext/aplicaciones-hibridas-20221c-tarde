import mongodb from 'mongodb'

const client = new mongodb.MongoClient('mongodb://localhost:27017')

client.connect()
  .then(async function () {
    console.log('Me conecte')
    const db = client.db('LosHijosDeSuMamita') // Obtengo la base de datos

    const alumnos = await db.collection('Alumnos').find().toArray()

    console.log(alumnos)

    client.close()
  })
  .catch(function () {
    console.log('Las cosas se salieron de contro...')
  })
