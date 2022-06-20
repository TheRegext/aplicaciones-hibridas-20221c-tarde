function autentication (req, res, next) {
  if (req.headers.authorization === 'ok') {
    next()
  } else {
    res.status(401).json({ message: 'No autorizado' })
  }
}

export {
  autentication
}
