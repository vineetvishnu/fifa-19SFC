import React from 'react';
import './Profile.css';
import image1 from './img/messi.png';
import messi from './img/messiface.png';
import club from './img/fc-barca.png';
import countryFlag from './img/argentina-flag.png';
import { NavLink } from 'react-router-dom';

function playerProfile(){
    return (
        <div className="profile-page">
            <NavLink to="/" className="home" activeClassName="Home">← Home</NavLink>
            <NavLink to="/Profile" className="help" activeClassName="Help">? Help</NavLink>
            <div className="player-detail">
                <span>L. Messi</span><img className="playerImg" src={messi} alt="messi"></img>
                <img className="country-logo" src={countryFlag} alt="Argentina Flag" title="Argentina"></img>
                <img className="club-logo" src={club} alt="FC Barcalona" title="FC Barcelona" />
            </div>
            <div className="player-container">
            <div className="graph-data"><img className="player-graph" src={image1} alt='player data'></img></div>
            <div className="player-data">
                <div><span className="overall">Overall <span>94</span></span></div>
                    <div className="container">
                <div className="container1">
                    <h2>Age<span>31</span></h2>
                    <h2>Height<span>5'7</span></h2>
                    <h2>Weight<span>159lbs</span></h2>
                    <h2>Preferred Foot<span>Left</span></h2>
                    <h2>Position<span>RF</span></h2>
                    <h2>Jersey Number<span>10</span></h2>
                    <h2>Work Rate (Attack - Defense)<span>Medium / Medium</span></h2>
                </div>
                <div className="container2">
                    <h2>Value<span>€110.5M</span></h2>
                    <h2>Wage<span>€565K</span></h2>
                    <h2>Joined<span>01/07/2004</span></h2>
                    <h2>Contract Valid Till<span>2021</span></h2>
                </div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default playerProfile;
