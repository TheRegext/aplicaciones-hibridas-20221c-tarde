import { ObjectId, MongoClient } from 'mongodb'

const cliente = new MongoClient('mongodb://localhost:27017')

async function find () {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Project01')
      const projects = await db.collection('Projects').find().toArray()
      return projects
    })
}

async function findOne (id) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Project01')
      const project = await db.collection('Projects').findOne(new ObjectId(id))
      return project
    })
}

async function create (project) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Project01')
      await db.collection('Projects').insertOne(project)
      return project
    })
}

async function update (id, project) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Project01')
      await db.collection('Projects').updateOne({ _id: new ObjectId(id) }, { $set: project })
      return project
    })
}

export {
  find,
  findOne,
  create,
  update
}
