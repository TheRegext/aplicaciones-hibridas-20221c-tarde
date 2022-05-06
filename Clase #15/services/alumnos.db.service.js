import { ObjectId, MongoClient } from 'mongodb'

const cliente = new MongoClient('mongodb://localhost:27017')

async function find () {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('LosHijosDeSuMamita')
      const alumnos = await db.collection('Alumnos').find().toArray()
      cliente.close()
      return alumnos
    })
}

async function findOne (id) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('LosHijosDeSuMamita')
      const alumno = await db.collection('Alumnos').findOne(ObjectId(id))
      cliente.close()
      return alumno
    })
}

export {
  find,
  findOne
}
