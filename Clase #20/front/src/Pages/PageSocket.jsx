import React,  { useEffect, useState } from 'react'
import SocketIO from 'socket.io-client'

function PageSocket({}){
    const [mensaje, setMensaje] = useState('Sin Datos')
    const [user, setUser] = useState({})
    const [acciones, setAcciones] = useState([])

    const addAccion = (action) =>{
        setAcciones([...acciones, action])
    }

    useEffect(
        () => {
            const socket = SocketIO('http://127.0.0.1:2022',{
                transports: ['websocket']
            })
            socket.on('welcome', (data) => {
                setMensaje(data)
            })

            socket.on('action', (data)=>{

               // console.log(acciones)
                acciones.push(data)
                setAcciones([...acciones])
                
            })

            socket.on('new-project', (project)=>{
                console.log(project)
                acciones.push(`se ha creado un nuevo proyecto "${project.name}"`)
                setAcciones([...acciones])
            })
        },[]
    )




//console.log(acciones)
    return (
        <div>
            <h1>PageSocket</h1>
            <p>{mensaje}</p>
            <h2>Acciones</h2>
            <ul>
                {acciones.map((accion, index) => {
                    return (
                        <li key={index}>{accion}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PageSocket;