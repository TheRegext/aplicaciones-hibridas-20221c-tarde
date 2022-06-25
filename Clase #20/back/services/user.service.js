import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

const cliente = new MongoClient('mongodb://localhost:27017')

async function login ({ userName, password }) {
  await cliente.connect()
  const db = cliente.db('Project01')
  const user = await db.collection('users').findOne({ userName })
  if (user) {
    const validate = await bcrypt.compare(password, user.password)

    if (validate) {
      user.password = ''
      return user
    }
  }

  return null
}

async function create (user) {
  await cliente.connect()
  const db = cliente.db('Project01')
  const userOld = await db.collection('users').findOne({ userName: user.userName })

  if (!userOld) {
    const salt = await bcrypt.genSalt(10)
    const newUser = { ...user, password: await bcrypt.hash(user.password, salt) }

    await db.collection('users').insertOne(newUser)
    return user
  } else {
    return null
  }
}

export {
  login,
  create
}
