import * as userService from '../services/user.service.js'
import jwt from 'jsonwebtoken'

function login (req, res) {
  const session = {
    userName: req.body.userName,
    password: req.body.password
  }

  return userService.login(session)
    .then(function (user) {
      if (user) {
        const token = jwt.sign({ id: user._id, name: user.userName }, 'CLAVE SECRETA')

        res.status(200).json({ user, token })
      } else {
        res.status(401).json({ msg: 'Usurio o Password Incorrecto' })
      }
    })
}

function create (req, res) {
  const user = {
    name: req.body.name,
    userName: req.body.userName,
    password: req.body.password
  }

  return userService.create(user)
    .then(function (user) {
      res.status(201).json(user)
    })
}

export {
  login,
  create
}
