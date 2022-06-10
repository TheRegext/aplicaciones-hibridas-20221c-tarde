
async function add(project){
/*
    const list = JSON.parse(localStorage.getItem('projects')) || []
    const newProject = {...project, id: list.length + 1}
    list.push(newProject)
    localStorage.setItem('projects', JSON.stringify(list))

    return newProject
*/
    return fetch(
        'http://localhost:2022/api/projects',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
    .then(response => response.json())
    .then(project => {
        return project
    })
}

async function find(){

    return fetch('http://localhost:2022/api/projects')
    .then(response => response.json())
    .then(list => {
        return list
    })
}

async function findById(id){
    return fetch(`http://localhost:2022/api/projects/${id}`)
    .then(response => response.json())
    .then(project => {
        return project
    }
    )
}


export {
    add,
    find,
    findById
}