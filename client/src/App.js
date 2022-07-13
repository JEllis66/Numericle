import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import './App.css';
import axios from "axios";
import Homepage from "./view/Homepage";
import Stats from "./components/Stats";
import Discussion from "./view/Discussion";
import NewDiscussion from "./components/NewDiscussion";
import OnePost from "./components/ViewDiscussion";
import EditPost from "./components/EditDiscussion";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


    return (

        <BrowserRouter>
            <div className="App">
            <Helmet>
              <meta charSet="utf-8"/>
              <title>Numericle</title>
              <meta name="description" content="Numericle: Equation Solving Puzzle Game"/>
            </Helmet>
        
                <Routes>
                    <Route element={<Homepage/>} path="/" />
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
