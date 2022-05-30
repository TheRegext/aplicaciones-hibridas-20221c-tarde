import {useState} from 'react'
// RENDERIZADO
function Contador({increment}){
    const [count, setCount] = useState(0)

    function handleAdd(event){
        event.preventDefault();

        console.log("Incremente!", count)
        setCount(count + increment)
    }
    
    return (
        <div>
            Valor: {count}
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default Contador