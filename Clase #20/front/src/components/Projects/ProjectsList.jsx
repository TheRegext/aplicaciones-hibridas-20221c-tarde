import { useEffect, useState } from "react";
import * as ProjectService from "../../Services/projects.services";
import ProjectForm from "./ProjectForm";

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
                    return <li key={i}><a href={`/${e._id}`}>{e.name}</a></li>
                })}
            </ul>
        </section>
    )

}

export default ProjectsList