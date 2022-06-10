import { useEffect, useState } from "react";
import * as ProjectService from "../Services/projects.services";
import { useParams } from "react-router-dom";

function ProjectView(){
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(()=>{
        ProjectService.findById(id)
        .then(project => setProject(project));
    }, [])

    return (
        <div>
        <h1>Project View</h1>
        <p>{project.name}</p>
        <p>{project.description}</p>
        </div>
    );
}

export default ProjectView;