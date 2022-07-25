import { useEffect, useState, createContext } from "react";
import * as ProjectService from "../../Services/projects.services";
import ProjectForm from "./ProjectForm";
import ProjectItem from "./ProjectItem";

import { ProjectContext } from "../../Context/ProjectsContext";



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
        <ProjectContext.Provider value={{projects, addProject }}>

        <section>
            <ProjectForm onSubmit={addProject} />
            <ul>
                {projects.map(function(project, i){
                    return <ProjectItem key={i} project={project}/>
                })}
            </ul>
        </section>
        </ProjectContext.Provider>
    )

}

export default ProjectsList