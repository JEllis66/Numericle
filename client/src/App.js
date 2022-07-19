import React, {useEffect} from "react";
import './App.css';
import Homepage from "./view/Homepage";
import Stats from "./components/Stats";
import Discussion from "./view/Discussion";
import NewDiscussion from "./components/Discussion/NewDiscussion";
import OnePost from "./components/Discussion/ViewDiscussion";
import EditPost from "./components/Discussion/EditDiscussion";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


    return (

        <BrowserRouter>
            <div className="App">
              
                  <Routes>
                      <Route element={<Homepage/>} path="/" />
                      <Route element={<Homepage/>} path="/home" />
                      <Route element={<Stats/>} path="/stats/:id"/>
                      <Route element={<Discussion/>} path="/discussion"/>
                      <Route element={<NewDiscussion/>} path="/discussion/new"/>
                      <Route element={<OnePost/>} path="/discussion/view/:id" />
                      <Route element={<EditPost/>} path="/discussion/edit/:id" />
                  </Routes>
                

            </div>
        </BrowserRouter>

    );
}

export default App;
