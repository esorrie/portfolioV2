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
                            <div className='projectTech'> This is going to be my tech stack </div>
                            <div className='projectDescription'> Lorem ipsum odor amet, consectetuer adipiscing elit. Ante posuere ac faucibus quis consequat vel etiam. Pharetra per mauris ac lacinia ridiculus himenaeos euismod. Donec et nisi venenatis quis curae fames. Per risus ac malesuada amet vel ultrices morbi nunc malesuada. Fringilla hendrerit faucibus ante ullamcorper; gravida congue. </div>
                        </div>
                    </div>
                    <div className='projectCard'>
                        <div className="projectCardA">
                            <div className='projectName'> Hybrid Cryptosystem </div>
                            <div className='projectTech'> Flask, Mongodb </div>
                            <div className='projectDescription'> Lorem ipsum odor amet, consectetuer adipiscing elit. Ante posuere ac faucibus quis consequat vel etiam. Pharetra per mauris ac lacinia ridiculus himenaeos euismod. Donec et nisi venenatis quis curae fames. Per risus ac malesuada amet vel ultrices morbi nunc malesuada. Fringilla hendrerit faucibus ante ullamcorper; gravida congue. </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Projects;

// TODO: Animations from side when scrolling or page loads for items on page