
function DigimonListItem({digimon}){
    return (<li>
        <h2>{digimon.name}</h2>
        <img src={digimon.img} style={{width: '100px', height: '100px'}} alt={digimon.name} title={digimon.name} />
    </li>)
}

export default DigimonListItem