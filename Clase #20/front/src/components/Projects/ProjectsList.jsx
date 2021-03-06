import { useEffect, useState } from "react";
import * as ProjectService from "../../Services/projects.services";
import ProjectForm from "./ProjectForm";

import {Link} from "react-router-dom";

function ProjectsList(){
    const [projects, setProjects] = useState([]);

    function findProjects(){
        ProjectService.find()
        .then(projects => {
            setProjects(projects);
        });
    }

    function addProject(project){
        ProjectService.add(project)
        .then(project => {
            findProjects()
        });
    }

    useEffect(() => {
        findProjects()
    }, []);

    return(
        <section>
            <ProjectForm onSubmit={addProject} />
            <ul>
                {projects.map(function(e, i){
                    return <li key={i}><Link to={`/projects/${e._id}`}>{e.name}</Link></li>
                })}
            </ul>
        </section>
    )

}

export default ProjectsList