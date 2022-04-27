import { readFile } from 'fs'

function findOne (id){

    return readFile('./data/alumnos.json', function (err, data) {
        const alumnos = err ? [] : JSON.parse(data.toString())
        // Busco con el ID el alumno en esa lista
        let alumno = null
        for (let i = 0; i < alumnos.length; i++) {
          if (alumnos[i].id === id) {
            alumno = alumnos[i]
          }
        }
        // Verifico de encuentro el alumno
        console.log('Servide:: Encontre el alumno!!', alumno)
        return alumno;
    })   
}

export {
    findOne
}