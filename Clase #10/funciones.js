function h(){
    return 5
}

function j(){
    return h() + 2;
}

console.log(j())

async function b(){
    console.log("Soy B")
    return 5
}

async function a(){
    return b() + 2 // estaria bien usar un await
}

a()
.then(function(data){
    console.log("DENTRO DE LA PROMESA", data)
}) 
.catch(function(err){
    console.log("ERROR: ", err)
})


console.log("A: ", valor)