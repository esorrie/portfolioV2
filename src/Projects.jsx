import React from 'react';
import "./Projects.css"

function Projects() {

    return (
        <>
            <div className='projectsTitle'>
                Projects
            </div>
            <div className='projectsSection'>
                <div className='projectContent'>
                    <div className='projectCard1'>
                        <div className="projectCard1a">
                            <div className='projectName'>EdScore</div>
                            <div className='projectTech'> This is going to be my tech stack</div>
                            <div className='projectDescription'>This is going to be a description of the project</div>
                        </div>
                        <div className='projectCard1b'>

                        </div>
                    </div>
                    {/* <div className='projectCard2'>
                        <div className='projectName'>EdScore</div>
                        <div className='projectTech'></div>
                        <div className='projectDescr'></div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Projects;