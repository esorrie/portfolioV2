import "./Projects.css"

function Projects() {

    return (
            <>
            <div className='projectsSection'>
                <div className='projectsTitle'>
                    Projects
                </div>
                <div className='projectContent'>
                    <div className="projectCardA">
                        <div className='projectName'> EdScore </div>
                        <div className='projectTech'> PHP (Laravel), MySQL, TailwindCSS </div>
                        <div className='projectDescription'> 
                            A football data website built with PHP Laravel and MySQL, 
                            integrating a third-party API to display up-to-date match stats, team info, and player data. 
                            It provides users with a dynamic and organized view of football insights.
                        </div>
                    </div>

                    <div className='projectCard'>
                        <div className='projectCardA'>
                            <div className='projectName'> Portfolio V1</div>
                            <div className='projectTech'>React  </div>
                            <div className='projectDescription'> 
                                My first attempt at a portfolio website. 
                            </div>
                        </div>
                    </div>
                    <div className='projectCard'>
                        <div className="projectCardA">
                            <div className='projectName'> Hybrid Cryptosystem </div>
                            <div className='projectTech'> Python, Mongodb </div>
                            <div className='projectDescription'> 
                                My dissertation project based around encryption methods for wireless communication. 
                                Features a hybrid cryptosystem consisting of the RSA and AES-256 algorithms to encrypt end-to-end messages. 
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Projects;

// TODO: Animations from side when scrolling or page loads for items on page