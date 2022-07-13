import React, {useEffect, useState} from "react";
import axios from "axios";
import EquationGeneration from './EquationGeneration';
import {useParams} from "react-router-dom";

const Main = (props) =>{

    const equationLength = 10;
    const numberOfGuesses = 6;
    let eqLength = [];
    let numGuesses = [];

    const [currentRow, setCurrentRow] = useState(1);
    const [currentCol, setCurrentCol] = useState(1);

    for(let i = 0; i < equationLength; i++){
        eqLength.push(i+1)
    }

    for(let i = 0; i < numberOfGuesses; i++){
        numGuesses.push(i+1)
    }

    const keyPress = (value) =>{
        if(currentCol < 10){
            document.getElementById(`row${currentRow}col${currentCol}`).innerHTML = value;
            setCurrentCol = currentCol+1;
        }
    }
    

    return (
        
        <div class="container mt-5 mb-5">
            
            <EquationGeneration/>

            {
                numGuesses.map(row=>(
                    <div class="d-flex justify-content-center">
                        {eqLength.map(col=>(
                            <p class="guessGrid" id={`row${row}col${col}`}></p>
                        ))}
                        <p class="equals">=</p>
                        <p class="guessGridAns" id={`ans${row}spot1`}></p>
                        <p class="guessGridAns" id={`ans${row}spot2`}></p>
                        <p class="guessGridAns" id={`ans${row}spot3`}></p>
                    </div>
                ))
            }

            <hr class="mt-5 mb-5"/>

            <div id="keypad_interface" class="container">
                <div id="row7" class="d-flex justify-content-center">
                    <p onClick={()=>keyPress(this.innerHTML)} class="key_unselected" id="key_1">1</p>
                    <p class="key_unselected" id="key_2">2</p>
                    <p class="key_unselected" id="key_3">3</p>
                    <p class="key_unselected" id="key_(">(</p>
                    <p class="key_unselected" id="key_)">)</p>
                    <p class="key_enterDelete" id="key_delete">Delete</p>
                </div>
                <div id="row8" class="d-flex justify-content-center">
                    <p class="key_unselected" id="key_4">4</p>
                    <p class="key_unselected" id="key_5">5</p>
                    <p class="key_unselected" id="key_6">6</p>
                    <p class="key_unselected" id="key_+">+</p>
                    <p class="key_unselected" id="key_-">-</p>
                    <p class="key_unselected" id="key_*">*</p>
                </div>
                <div id="row9" class="d-flex justify-content-center">
                    <p class="key_unselected" id="key_7">7</p>
                    <p class="key_unselected" id="key_8">8</p>
                    <p class="key_unselected" id="key_9">9</p>
                    <p class="key_unselected" id="key_0">0</p>
                    <p class="key_unselected" id="key_/">/</p>
                    <p class="key_unselected" id="key_^">^</p>
                </div>
                <div id="row10" class="d-flex justify-content-center">
                    <p class="key_enterDelete" id="key_enter"> Enter </p>
                </div>
            </div>

        </div>
    )
}



export default Main;