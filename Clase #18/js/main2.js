// Contador Estructurado
for(let i =0; i < 5; i++){
    let cant = 0
    const $item = document.createElement('span')
    const $button = document.createElement('button')

    $item.innerText = cant
    $button.innerText = "+"

    document.body.appendChild($item)
    document.body.appendChild($button)

    $button.addEventListener('click', function(){
        cant++
        $item.innerText = cant
    })
}