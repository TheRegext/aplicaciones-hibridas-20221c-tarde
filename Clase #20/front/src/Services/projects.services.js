
async function add(project){
    return fetch(
        'http://localhost:2022/api/projects',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(project)
        })
    .then(response => response.json())
    .then(project => {
        return project
    })
}

async function find(){

    return fetch('http://localhost:2022/api/projects',{
        headers:{
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
    .then(list => {
        return list
    })
}

async function findById(id){
    return fetch(`http://localhost:2022/api/projects/${id}`,{
        headers:{
            'auth-token': localStorage.getItem('token')
        }
    })
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