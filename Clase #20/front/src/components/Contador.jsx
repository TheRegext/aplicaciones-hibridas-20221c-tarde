import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'

// RENDERIZADO
function Contador({increment, initial}){
    const [count, setCount] = useState(initial)
    const [valor, setValor] = useState(0)

    function handleAdd(event){
        event.preventDefault();
        setCount(count + increment) // forzar el render
    }

    function handleAddValor(event){
        event.preventDefault()
        setValor(valor + increment)
    }

    // Cuando crea el componente
    useEffect(function(){
        console.log("Montar")
        return function(){
            console.log("Desmontar")
        }
    }, [])
    
    // Cunado modifica el valor
    useEffect(function(){
        console.log("Cambio Valor = ", valor)
    }, [valor])

    console.log("Renderice Contador....")
    return (
        <div>
            Count: {count}
            <button onClick={handleAdd}>+</button>
            Valor: {valor}
            <button onClick={handleAddValor}>+</button>
        </div>
    )
}

Contador.defaultProps = {
    increment: 1
}

Contador.propTypes = {
    increment: PropTypes.number,
    initial: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['suma', 'resta', 'multiplicacion', 'division'])

}

export default Contador