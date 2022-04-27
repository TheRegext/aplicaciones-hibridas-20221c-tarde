import { readFile, writeFile } from 'fs' // importanto las funciones espesificas
import * as AlumnosModel from '../services/alumnos.service.js'




export function viewAll (req, res) {
  readFile('data/alumnos.json', function (err, data) {
    const alumnos = err ? [] : JSON.parse(data.toString())

    res.render('alumnos', { alumnos })
  })
}







export function formCreate (req, res) {
  res.render('alumnos/nuevo', {})
}

export function formEdit (req, res) {
  const id = parseInt(req.query.id)

  // Leer el archivo alumnos.json
  readFile('./data/alumnos.json', function (err, data) {
    const alumnos = err ? [] : JSON.parse(data.toString())
    // Busco con el ID el alumno en esa lista
    let alumno = null
    for (let i = 0; i < alumnos.length; i++) {
      if (alumnos[i].id === id) {
        alumno = alumnos[i]
      }
    }
    // Verifico de encuentro el alumno
    if (alumno) {
      res.render('alumnos/editar', { alumno })
    } else { // Else
      // Muestro un mensaje 404
      res.status(404).send(`El alumnos #${id} no existe...`)
    }
  })
}

export function edit (req, res) {
  const id = parseInt(req.query.id)

  // Buscar el Alumno
  let alumno = alumnos.findByID(id)
  // Modifcar el Alumno
  alumno.name = req.body.name
  // Guardar el Alumno
  alumnos.update(alumno)

  // Leer el archivo alumnos.json
  readFile('./data/alumnos.json', function (err, data) {
    const alumnos = err ? [] : JSON.parse(data.toString())
    // Busco con el ID el alumno en esa lista
    let index = -1
    for (let i = 0; i < alumnos.length; i++) {
      if (alumnos[i].id === id) {
        index = i
      }
    }
    // Verifico de encuentro el alumno
    if (index !== -1) {
      alumnos[index].name = req.body.name

      writeFile('./data/alumnos.json', JSON.stringify(alumnos), function (err) {
        console.log(err)
      })
      res.redirect('/alumnos')
    } else { // Else
      // Muestro un mensaje 404
      res.status(404).send(`El alumnos #${id} no existe...`)
    }
  })
}














export function viewOne (req, res) {
  const id = parseInt(req.query.id)

  // Mostrar el alumno solicitado
  // Buscamos el alumno
  let alumno = AlumnosModel.findOne(id)
  console.log("Controller:: Alumno: ", alumno)
  // Si lo encuento
  if(alumno){
    // Lo muestro
    res.render('alumnos/alumno', {alumno}) // Ok
  }
  else{
    // Si no lo encuentro
    // Muestro error
    res.status(404).render('error', {message: `El alumno #${id} no se encuentra en el sistema.`}) // ok

  }
}


/**
 * 
 




  // Leer el archivo alumnos.json
  readFile('./data/alumnos.json', function (err, data) {
    const alumnos = err ? [] : JSON.parse(data.toString())
    // Busco con el ID el alumno en esa lista
    let alumno = null
    for (let i = 0; i < alumnos.length; i++) {
      if (alumnos[i].id === id) {
        alumno = alumnos[i]
      }
    }
    // Verifico de encuentro el alumno
    if (alumno) {
      // Muestro el alumno
      res.send(`
        <html>
        <body>
          <h1>${alumno.name}</h1>
          <p>Numero: #${alumno.id}</p>
        </body>
        </html>
        `)
    } else { // Else
      // Muestro un mensaje 404
      res.status(404).send(`El alumnos #${id} no existe...`)
    }
  })
 */




















export function create (req, res) {
  readFile('./data/alumnos.json', function (err, data) {
    const alumnos = (err) ? [] : JSON.parse(data.toString())

    alumnos.push({
      id: alumnos.length + 1,
      name: req.body.name
    })

    writeFile('./data/alumnos.json', JSON.stringify(alumnos), function (err) {
      console.log(err)
    })

    res.redirect('/alumnos')
  })
}

export default {
  viewAll,
  viewOne,
  create,
  formCreate,
  formEdit,
  edit
}
