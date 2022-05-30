import DigimonListItem from "./DigimonListItem"

const DIGIMONS_DATA = [{"name":"Koromon","img":"https://digimon.shadowsmith.com/img/koromon.jpg","level":"In Training"},{"name":"Tsunomon","img":"https://digimon.shadowsmith.com/img/tsunomon.jpg","level":"In Training"},{"name":"Yokomon","img":"https://digimon.shadowsmith.com/img/yokomon.jpg","level":"In Training"},{"name":"Motimon","img":"https://digimon.shadowsmith.com/img/motimon.jpg","level":"In Training"},{"name":"Tanemon","img":"https://digimon.shadowsmith.com/img/tanemon.jpg","level":"In Training"},{"name":"Bukamon","img":"https://digimon.shadowsmith.com/img/bukamon.jpg","level":"In Training"},{"name":"Tokomon","img":"https://digimon.shadowsmith.com/img/tokomon.jpg","level":"In Training"}]

function DigimonList(){
    /*
const lista =  []

DIGIMONS_DATA.forEach(function(digimon, i){
    lista.push(
        <li>
            <h2>{digimon.name}</h2>
            <img src={digimon.img} />
        </li>
    )
})*/


    return (
        <>
            <h1>Lista de Digimon</h1>
            <ul>
                {DIGIMONS_DATA.map((digimon)=> <DigimonListItem digimon={digimon}/>)}
            </ul>
        </>
    )
}

export default DigimonList