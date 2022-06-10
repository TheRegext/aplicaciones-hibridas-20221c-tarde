import { useState, useEffect } from "react"
import DigimonListItem from "./DigimonListItem"

//const DIGIMONS_DATA = [{"name":"Koromon","img":"https://digimon.shadowsmith.com/img/koromon.jpg","level":"In Training"},{"name":"Tsunomon","img":"https://digimon.shadowsmith.com/img/tsunomon.jpg","level":"In Training"},{"name":"Yokomon","img":"https://digimon.shadowsmith.com/img/yokomon.jpg","level":"In Training"},{"name":"Motimon","img":"https://digimon.shadowsmith.com/img/motimon.jpg","level":"In Training"},{"name":"Tanemon","img":"https://digimon.shadowsmith.com/img/tanemon.jpg","level":"In Training"},{"name":"Bukamon","img":"https://digimon.shadowsmith.com/img/bukamon.jpg","level":"In Training"},{"name":"Tokomon","img":"https://digimon.shadowsmith.com/img/tokomon.jpg","level":"In Training"}]




function DigimonList(){
    const [digimons, setDigimons] = useState([])

    // ejecua algo la primera vez nada mas
    useEffect(function(){
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            setDigimons(data) // forzar el render
            console.log("Con Datos")
        })
    }, [])

    
    console.log("Renderizado!")

    return (
        <>
            <h2>Lista de Digimon</h2>
            <ul>
                {digimons.map((digimon)=> <DigimonListItem digimon={digimon}/>)}
            </ul>
        </>
    )
}

export default DigimonList