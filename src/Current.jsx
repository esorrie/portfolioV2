import './Current.css'

function Current() {

    return (
        <>
        <div className='currentSection'>
            <div className='currentTitle'>
                Current Work
            </div>
            <div className='currentContent'>
                <div className='currentCard'> 
                    <div className='workTitleFirst'>
                        Finance Tracker
                    </div>
                    <div className='workTech'>
                        Tech Stack: React, Flask, PostgreSQL, Docker
                    </div>
                    <div className='workDescription'>
                        A financial data platform with a Flask backend and React frontend that delivers real-time market insights. 
                        It integrates with a finance API to provide up-to-date stock and ETF data, 
                        enabling users to track performance, analyze trends, and make informed investment decisions.
                    </div>
                </div>
                <div className='currentCard'> 
                    <div className='workTitle'>
                        Portfolio V2
                    </div>
                    <div className='workTech'>
                        Tech Stack: React
                    </div>
                    <div className='workDescription'>
                        A personal portfolio website showcasing my projects and skills, built with React.
                        It features a modern design, responsive layout, creating a simple to use interface.
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Current;