import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import Menu from "./Menu.js";
import Stats from "./Stats.js";
import Help from "./Help.js";
import Settings from "./Settings.js";

import menu1 from "../images/menu_light.png";
import menu2 from "../images/menu_hover.png";
import stats1 from "../images/stats_light.png";
import stats2 from "../images/stats_hover.png";
import help1 from "../images/help_light.png";
import help2 from "../images/help_hover.png";
import settings1 from "../images/settings_light.png";
import settings2 from "../images/settings_hover.png";
import logo from "../images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () =>{
    const [menuPopup, setMenuPopup] = useState(false);
    const [statsPopup, setStatsPopup] = useState(false);
    const [helpPopup, setHelpPopup] = useState(false);
    const [settingsPopup, setSettingsPopup] = useState(false);


    return (

        <div id="nav" class="container d-flex justify-content-between align-middle mt-3">
            <div class="row col-0">
                <Menu trigger={menuPopup} setTrigger={setMenuPopup}>
                    <div class="d-flex justify-content-between">
                        <h2 class="text-secondary"> Menu:</h2>
                        <button className="closePopUp" onClick={()=> {setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setMenuPopup(!menuPopup)}}>X</button>
                    </div>
                    <div class="row d-flex justify-content-start mt-3">
                        <div><Link class="text-decoration-none" to={"/discussion"}><ul>Daily Discussion</ul></Link></div>
                        <div><a class="text-decoration-none" href="https://github.com/JEllis66/Numericle"><ul>Numericle's GitHub Repo</ul></a></div>
                        <div><a class="text-decoration-none" href="https://jtellis.com/"><ul>Creator's Homepage</ul></a></div>
                    </div>    
                </Menu>
                <Stats trigger={statsPopup} setTrigger={setStatsPopup}>
                    <div class="d-flex justify-content-between">
                        <h2 class="text-secondary"> Stats:</h2>
                        <button className="closePopUp" onClick={()=> {setMenuPopup(false); setHelpPopup(false); setSettingsPopup(false); setStatsPopup(!statsPopup)}}>X</button>
                    </div>
                    <div class="row d-flex justify-content-start mt-3">
                        <div><Link class="text-decoration-none" to={"/discussion"}><ul>Daily Discussion</ul></Link></div>
                        <div><a class="text-decoration-none" href="https://github.com/JEllis66/Numericle"><ul>Numericle's GitHub Repo</ul></a></div>
                        <div><a class="text-decoration-none" href="https://jtellis.com/"><ul>Creator's Homepage</ul></a></div>
                    </div>    
                </Stats>
                <Help trigger={helpPopup} setTrigger={setHelpPopup}>
                    <div class="d-flex justify-content-between">
                        <h2 class="text-secondary"> Help:</h2>
                        <button className="closePopUp" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setSettingsPopup(false); setHelpPopup(!helpPopup)}}>X</button>
                    </div>
                    <div class="row d-flex justify-content-start mt-3">
                        <div><Link class="text-decoration-none" to={"/discussion"}><ul>Daily Discussion</ul></Link></div>
                        <div><a class="text-decoration-none" href="https://github.com/JEllis66/Numericle"><ul>Numericle's GitHub Repo</ul></a></div>
                        <div><a class="text-decoration-none" href="https://jtellis.com/"><ul>Creator's Homepage</ul></a></div>
                    </div>    
                </Help>
                <Settings trigger={settingsPopup} setTrigger={setSettingsPopup}>
                    <div class="d-flex justify-content-between">
                        <h2 class="text-secondary"> Settings:</h2>
                        <button className="closePopUp" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setSettingsPopup(!settingsPopup)}}>X</button>
                    </div>
                    <div class="row d-flex justify-content-start mt-3">
                        <div><Link class="text-decoration-none" to={"/discussion"}><ul>Daily Discussion</ul></Link></div>
                        <div><a class="text-decoration-none" href="https://github.com/JEllis66/Numericle"><ul>Numericle's GitHub Repo</ul></a></div>
                        <div><a class="text-decoration-none" href="https://jtellis.com/"><ul>Creator's Homepage</ul></a></div>
                    </div>    
                </Settings>
            </div>
            <div class="col-2">
                <img class="icons mt-3" id="icon1" src={menu1} alt="menu.png" onClick={()=> {setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setMenuPopup(!menuPopup)}} onMouseEnter={e => (e.currentTarget.src = menu2)} onMouseLeave={e => (e.currentTarget.src = menu1)}/>
                <img class="icons mt-3" id="icon2" src={stats1} alt="stats.png" onClick={()=> {setMenuPopup(false); setHelpPopup(false); setSettingsPopup(false); setStatsPopup(!statsPopup)}} onMouseEnter={e => (e.currentTarget.src = stats2)} onMouseLeave={e => (e.currentTarget.src = stats1)}/>
            </div>
            <h1 class="text-primary pt-2 col-8">
                <Link class='text-decoration-none' to={"/"}><p><span><img class="icons mb-2" id="logoTop" src={logo} alt="numericleLogo.png"/></span>umericle</p></Link>
            </h1>
            <div class="col-2">
                <img class="icons mt-3" id="icon3" src={help1} alt="help.png" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setSettingsPopup(false); setHelpPopup(!helpPopup)}} onMouseEnter={e => (e.currentTarget.src = help2)} onMouseLeave={e => (e.currentTarget.src = help1)}/>
                <img class="icons mt-3" id="icon4" src={settings1} alt="settings.png" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setSettingsPopup(!settingsPopup)}} onMouseEnter={e => (e.currentTarget.src = settings2)} onMouseLeave={e => (e.currentTarget.src = settings1)}/>
            </div>
        </div>
    )
}



export default Navigation;