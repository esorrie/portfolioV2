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
                        Desc: Lorem ipsum odor amet, consectetuer adipiscing elit. Ante posuere ac faucibus quis consequat vel etiam. Pharetra per mauris ac lacinia ridiculus himenaeos euismod. Donec et nisi venenatis quis curae fames. Per risus ac malesuada amet vel ultrices morbi nunc malesuada. Fringilla hendrerit faucibus ante ullamcorper; gravida congue.
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
                        Desc: Lorem ipsum odor amet, consectetuer adipiscing elit. Ante posuere ac faucibus quis consequat vel etiam. Pharetra per mauris ac lacinia ridiculus himenaeos euismod. Donec et nisi venenatis quis curae fames. Per risus ac malesuada amet vel ultrices morbi nunc malesuada. Fringilla hendrerit faucibus ante ullamcorper; gravida congue.
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Current;