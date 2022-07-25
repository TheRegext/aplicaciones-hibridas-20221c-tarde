import React from 'react';
import {Link} from 'react-router-dom';
import ProjectCount from './ProjectCount';

function ProjectItem({project}){

return (
    <li>
        <ProjectCount />
        <Link to={`/projects/${project._id}`}>{project.name}</Link>
    </li>
    
)
}

export default ProjectItem;