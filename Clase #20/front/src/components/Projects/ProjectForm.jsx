import { useState } from "react";
import PropTypes from "prop-types";

function ProjectForm({onSubmit}){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const project = {
            name,
            description
        }
        onSubmit(project)
    }

    function handleChangeName(event){
        setName(event.target.value);
    }

    function handleChangeDescription(event){
        setDescription(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre: <input onChange={handleChangeName} value={name} />
            </label>
            <br />
            <label>
                Descripcion: <input onChange={handleChangeDescription} value={description} />
            </label>
            <br />
            <button>Agregar</button>
        </form>
    )
}

ProjectForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ProjectForm;