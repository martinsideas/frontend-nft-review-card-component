import React from 'react';
import './styles/styles.css'
/*IMAGES*/
import nftImage from './images/image-equilibrium.jpg'
import avatar from './images/image-avatar.png'
import iconEth from './images/icon-ethereum.svg'
import iconClock from './images/icon-clock.svg'
/*IMAGES*/

function App(){
    return(
<>
    <Card />
    <Attribution />
</>
    );
}
function Card(){
    return(
        <div className="card">
            <img src={nftImage} alt="NFT" />
            <div className="card-content">
                <h2>Equilibrium #3429</h2>
                <p className="about">Our Equilibrium collection promotes balance and calm.</p>
                <div className="eth">
                    <div className="eth-price">
                        <img src={iconEth} alt="eth icon" />
                        <p>0.041 ETH</p>
                    </div>
                    <div className="days-left">
                        <img src={iconClock} alt="clock icon" />
                        <p>3 days left</p>
                    </div>
                </div>
                <hr />
                <div className="creator">
                    <div className="img-bg">
                        <img src={avatar} alt="avatar icon"/>
                    </div>
                    <p>Creation of <span>Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    );
}
function Attribution(){
    return(
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/martinsideas" target="_blank" rel="noreferrer">Martin The Coder</a>.
        </div>
    );
}

export default App;