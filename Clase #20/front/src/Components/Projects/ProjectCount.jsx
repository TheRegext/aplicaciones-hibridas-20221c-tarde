import React, {useContext} from 'react';
import { ProjectContext } from '../../Context/ProjectsContext';

function ProjectCount(props){
    const {projects} = useContext(ProjectContext);
    return (
        <span className="project-count">{projects.length}</span>
    )
}

export default ProjectCount;