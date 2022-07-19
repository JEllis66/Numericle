import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import Menu from "./Menu.js";
import Stats from "./Stats.js";
import Help from "./Help.js";
import Settings from "./Settings.js";
import UserLogin from "./User/UserLogin.js";
import NewUser from "./User/NewUser.js";

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
    const [userLoginPopup, setUserLoginPopup] = useState(false);
    const [newLoginPopup, setNewLoginPopup] = useState(false);

    return (

        <div id="nav" className="container d-flex justify-content-between align-middle mt-3">
            <div className="row col-0">
                <Menu trigger={menuPopup} setTrigger={setMenuPopup}>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-secondary"> Menu:</h2>
                        <button className="closePopUp" onClick={()=> {setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setUserLoginPopup(false); setNewLoginPopup(false); setMenuPopup(!menuPopup)}}>X</button>
                    </div>
                    <ul className="row d-flex text-start mt-3 pb-4">
                        <li className="mt-2 mb-2"><Link className="text-decoration-none" to={"/home"}>Home</Link></li>
                        <li onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setNewLoginPopup(false); setUserLoginPopup(!userLoginPopup)}} className="mb-2"><a className="text-decoration-none" href="#">User Login</a></li>
                        <li className="mb-2"><Link className="text-decoration-none" to={"/discussion"}>Daily Discussion</Link></li>
                        <li className="mb-2"><a className="text-decoration-none" href="https://github.com/JEllis66/Numericle">Numericle's GitHub Repo</a></li>
                        <li className="mb-2"><a className="text-decoration-none" href="https://jtellis.com/">Creator's Homepage</a></li>
                    </ul>    
                </Menu>
                <Stats trigger={statsPopup} setTrigger={setStatsPopup}>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-secondary"> Stats:</h2>
                        <button className="closePopUp" onClick={()=> {setMenuPopup(false); setHelpPopup(false); setSettingsPopup(false); setUserLoginPopup(false); setNewLoginPopup(false); setStatsPopup(!statsPopup)}}>X</button>
                    </div>
                    <div className="row d-flex justify-content-start mt-3">
                        <p>User stats will go here...</p>
                    </div>    
                </Stats>
                <Help trigger={helpPopup} setTrigger={setHelpPopup}>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-secondary"> Help:</h2>
                        <button className="closePopUp" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setSettingsPopup(false); setUserLoginPopup(false); setNewLoginPopup(false); setHelpPopup(!helpPopup)}}>X</button>
                    </div>
                    <div className="row d-flex justify-content-start mt-3">
                        <p>Help/Tutorial Graphic will go here...</p>
                    </div>    
                </Help>
                <Settings trigger={settingsPopup} setTrigger={setSettingsPopup}>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-secondary"> Settings:</h2>
                        <button className="closePopUp" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setUserLoginPopup(false); setNewLoginPopup(false); setSettingsPopup(!settingsPopup)}}>X</button>
                    </div>
                    <p className="mt-4" >Settings will go here with much better styling...</p>
                    <label className="d-flex text-start mt-4 mb-2">
                        <span>Dark Mode</span>
                        <input type="checkbox"/>
                    </label>
                    <label className="d-flex text-start mt-2 mb-2">
                        <span className="mr-3">Hard Mode</span>
                        <input className="mr-3" type="checkbox"/>
                    </label>    
                </Settings>
                <UserLogin trigger={userLoginPopup} setTrigger={setUserLoginPopup}>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-secondary"> User Login:</h2>
                        <button className="closePopUp" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setNewLoginPopup(false); setUserLoginPopup(!userLoginPopup)}}>X</button>
                    </div>
                    <div className="row d-flex text-start mt-3">
                        <form className="form">
                            <div className="mb-1">
                                <label className="form-label">
                                    Email Address:
                                    <input type="email" className="form-control"/>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Password:
                                    <input type="password" className="form-control"/>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary mb-4">Login</button>
                            <div className="mb-4">
                                <a href="#" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setUserLoginPopup(false); setNewLoginPopup(!newLoginPopup)}}>Create Account</a>
                            </div>
                        </form>
                    </div>    
                </UserLogin>
                <NewUser trigger={newLoginPopup} setTrigger={setNewLoginPopup}>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-secondary"> New Login:</h2>
                        <button className="closePopUp" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setUserLoginPopup(false); setNewLoginPopup(!newLoginPopup)}}>X</button>
                    </div>
                    <div className="row d-flex text-start mt-4">
                        <form className="form">
                            <div className="mb-1 d-flex justify-content-around">
                                <div></div>
                                <label className="form-label">
                                    Email Address:
                                    <input type="email" className="form-control"/>
                                </label>
                                <label className="form-label">
                                    Username:
                                    <input type="text" className="form-control"/>
                                </label>
                                <div></div>
                            </div>
                            <div className="mb-3 d-flex justify-content-around">
                            <div></div>
                                <label className="form-label">
                                    Password:
                                    <input type="password" className="form-control"/>
                                </label>
                                <label className="form-label">
                                    Confirm Password:
                                    <input type="password" className="form-control"/>
                                </label>
                                <div></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setUserLoginPopup(!userLoginPopup); setNewLoginPopup(!newLoginPopup)}} type="submit" className="btn btn-primary ml-5 mb-4 mt-3 ">Create User</button>
                            </div>
                        </form>
                    </div>       
                </NewUser>
            </div>
            <div className="col-2">
                <img className="icons mt-3" id="icon1" src={menu1} alt="menu.png" onClick={()=> {setStatsPopup(false); setHelpPopup(false); setSettingsPopup(false); setUserLoginPopup(false); setNewLoginPopup(false); setMenuPopup(!menuPopup)}} onMouseEnter={e => (e.currentTarget.src = menu2)} onMouseLeave={e => (e.currentTarget.src = menu1)}/>
                <img className="icons mt-3" id="icon2" src={stats1} alt="stats.png" onClick={()=> {setMenuPopup(false); setHelpPopup(false); setSettingsPopup(false); setUserLoginPopup(false); setNewLoginPopup(false); setStatsPopup(!statsPopup)}} onMouseEnter={e => (e.currentTarget.src = stats2)} onMouseLeave={e => (e.currentTarget.src = stats1)}/>
            </div>
            <h1 className="text-primary pt-2 col-8">
                <Link className='text-decoration-none' to={"/"}><p><span><img className="icons mb-2" id="logoTop" src={logo} alt="numericleLogo.png"/></span>umericle</p></Link>
            </h1>
            <div className="col-2">
                <img className="icons mt-3" id="icon3" src={help1} alt="help.png" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setSettingsPopup(false); setUserLoginPopup(false); setNewLoginPopup(false); setHelpPopup(!helpPopup)}} onMouseEnter={e => (e.currentTarget.src = help2)} onMouseLeave={e => (e.currentTarget.src = help1)}/>
                <img className="icons mt-3" id="icon4" src={settings1} alt="settings.png" onClick={()=> {setMenuPopup(false); setStatsPopup(false); setHelpPopup(false); setUserLoginPopup(false); setNewLoginPopup(false); setSettingsPopup(!settingsPopup)}} onMouseEnter={e => (e.currentTarget.src = settings2)} onMouseLeave={e => (e.currentTarget.src = settings1)}/>
            </div>
        </div>
    )
}



export default Navigation;