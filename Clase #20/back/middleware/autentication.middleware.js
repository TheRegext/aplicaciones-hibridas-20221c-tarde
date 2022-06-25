import jwt from 'jsonwebtoken'

function autentication (req, res, next) {
  try {
    const token = req.headers['auth-token']
    if (token) {
      const tokenValidate = jwt.verify(token, 'CLAVE SECRETA')
      if (tokenValidate) {
        next()
      } else {
        res.status(401).json({ msg: 'Token incorrecto' })
      }
    } else {
      res.status(401).json({ msg: 'Token no enviado' })
    }
  } catch (err) {
    res.status(401).json({ msg: 'Token incorrecto' })
  }
}

export {
  autentication
}
