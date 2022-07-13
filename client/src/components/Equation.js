import React, {useEffect, useState} from 'react';
import {create, all} from 'mathjs';

const Equation = (props) =>{

    const config = { }
    const math = create(all, config)

    const [eq, setEq] = useState("");
    const [solutionFin, setSolutionFin] = useState("");

	let equation = [];
    let dailySolution = 0;
    let solutionCalc = "";
    let eqIndex = 0;
    let remainingChars = 10;
    let finalEquation = [];
    let maxParenths = 1;
    let mostRecentChar = "";
    let mostRecentNum = "";
    let mostRecentOp = "";
    let openParenthCount = 0;
    let closeParenthCount = 0;
    let reservedChars = 0;
    const possibleNumP = "0123456789p"
    const possibleNumPAlt = "123456789p"
    const possibleChars = "0123456789+-mdep";
    const possibleCharsAlt = "123456789+-mdep";
    const possibleOpNums = "0123456789+-mde"
    const possibleOpNumsAlt = "123456789+-mde"
    const possibleNums = "0123456789";
    const possibleNumsAlt = "123456789";
    const possibleOps = "+-md";

    function parenthChooser(){
        if (mostRecentChar === 'p' && openParenthCount === closeParenthCount){
            openParenthAdd();
        } else if (mostRecentChar === 'p' && openParenthCount === maxParenths) {
            closeParenthAdd();
        } else if (mostRecentChar === 'p' && equation[eqIndex-1] === 'o' ) {
            openParenthAdd();
        } else if ('+-mde'.includes(equation[eqIndex-1])){
            openParenthAdd();
        } else {
            Math.random() < 0.5 ? openParenthAdd() : closeParenthAdd();
        }
    }

    function openParenthAdd(){
        openParenthCount++;
        reservedChars++;
        equation[eqIndex] = 'o'
        mostRecentOp = 'o';
        mostRecentChar = 'o';
    }

    function closeParenthAdd(){
        closeParenthCount++;
        reservedChars--;
        equation[eqIndex] = 'c';
        mostRecentOp = 'c';
        mostRecentChar = 'c';
    }

    function midLegalCharTest(){
        if (mostRecentChar === 'o'){
            if (openParenthCount === maxParenths){
                return "Nums";
            } else {
                return "NumP";
            }
        } else if (mostRecentChar === 'c'){
            if (openParenthCount === maxParenths && closeParenthCount === maxParenths){
                return "Nums";
            } else {
                return "allChars";
            }
        } else if ('+-mde'.includes(mostRecentChar)){
            if (openParenthCount === maxParenths){
                return "Nums"
            } else if ('e'.includes(equation[eqIndex-2])){
                return "Ops";
            } else {
                return "NumP";
            }
            } else {
                return "allChars";
            }
    }

    function endLegalCharTest(){
        if (reservedChars === (remainingChars)){
            return "close";
        } else if (remainingChars === 1 || mostRecentChar === 'o'){
            return "Nums";
        } else if ((remainingChars === 3 && reservedChars >= 1) || equation[eqIndex-2] === 'o'){
            return "Nums";
        } else if ( remainingChars === 2 ){
            if (reservedChars - remainingChars > 1 || reservedChars === (remainingChars)){
                return "close";
            } else {
                return "Nums";
            }
        } else if ( (remainingChars <= (reservedChars + maxParenths)) && (mostRecentChar === mostRecentOp) ){
            return "Nums"
        } else if (remainingChars + 1 === reservedChars || ((openParenthCount === closeParenthCount) && remainingChars < 3)){
            return "Nums"
        } else if (equation[eqIndex-2] === 'e'){
            return "Ops";
        } else if (possibleNums.includes(mostRecentChar)){
            if (reservedChars < remainingChars && openParenthCount < maxParenths){
                return "allChars";
            } else if (reservedChars < remainingChars && openParenthCount === maxParenths && closeParenthCount > maxParenths){
                var rand = Math.random() < 0.5 ? true : false;
                if (rand){
                    return "close";
                } else{
                    return "Nums";
                }
            } else if (closeParenthCount === maxParenths){
                return "OpNums";
            } else {
                console.log("Another condition not thought of was met")
                return "Nums"
            }
        } else if ('+-mde'.includes(mostRecentChar)){
            return "Nums"
        } else if (mostRecentChar === 'c' && closeParenthCount === maxParenths){
            return "NumOps"
        } else if(mostRecentChar === 'c' && openParenthCount === maxParenths && closeParenthCount < openParenthCount){
            return "NumP"
        } else {
            return "Nums";
        }
    }

    function pickNumP(){
        if (possibleNums.includes(mostRecentChar) && eqIndex !== 0){
            equation.push(possibleNumP.charAt(Math.floor(Math.random()*possibleNumP.length)));
        } else {
            equation.push(possibleNumPAlt.charAt(Math.floor(Math.random()*possibleNumPAlt.length)));
        }
        mostRecentChar = equation[eqIndex];
        if (mostRecentChar === 'p'){
            parenthChooser();
        } else {
            mostRecentNum = mostRecentChar;
        }
    }

    function pickNums(){
        if (equation[eqIndex-2] === 'e'){
            if (eqIndex === 9){
                equation.push('.');
                equation.push(possibleNums.charAt(Math.floor(Math.random()*possibleNums.length)));
            }
                pickOps();
            return;
        } else {   
            if (possibleNums.includes(mostRecentChar)){
                equation.push(possibleNums.charAt(Math.floor(Math.random()*possibleNums.length)));
            } else {
                equation.push(possibleNumsAlt.charAt(Math.floor(Math.random()*possibleNumsAlt.length)));
            }
        }
        mostRecentChar = equation[eqIndex];
        mostRecentNum = mostRecentChar;
    }

    function pickOps(){
        equation.push(possibleOps.charAt(Math.floor(Math.random()*possibleOps.length)));
        mostRecentChar = equation[eqIndex];
        if (mostRecentChar === 'p'){
            parenthChooser();
        } else {
        mostRecentChar = equation[eqIndex];
        mostRecentOp = mostRecentChar;
        }
    }

    function pickOpNums(){
        if (possibleNums.includes(mostRecentChar)){
            equation.push(possibleOpNums.charAt(Math.floor(Math.random()*possibleOpNums.length)));
        } else {
            equation.push(possibleOpNumsAlt.charAt(Math.floor(Math.random()*possibleOpNumsAlt.length)));
        }
        mostRecentChar = equation[eqIndex];
        if (possibleNums.includes(mostRecentChar)){
            mostRecentNum = mostRecentChar;
        } else {
            mostRecentOp = mostRecentChar;
        }
    }

    function pickFromAllChars(){
        if (possibleNums.includes(mostRecentChar)){
            equation.push(possibleChars.charAt(Math.floor(Math.random()*possibleChars.length)));
        } else {
            equation.push(possibleCharsAlt.charAt(Math.floor(Math.random()*possibleCharsAlt.length)));
        }
        mostRecentChar = equation[eqIndex];
        if (mostRecentChar === 'p'){
            parenthChooser();
        } else if ('+-mde'.includes(mostRecentChar)){
            mostRecentOp = mostRecentChar;
        } else {
            mostRecentNum = mostRecentChar;
        }
    }

    function numOpCount(){
        var counter = 0;
        for (var index = 0; index < solutionCalc.length; index++){
            if ( solutionCalc[index] === ('+')|| solutionCalc[index] === ('-') || solutionCalc[index] === ('*') || solutionCalc[index] === ('/') || solutionCalc[index] === ('^')){
                counter++;
            }
        }
        return counter; 
    }

    function makeEquation(num=10) {
        let lengthEq = num;
        equation.length = 0;
        solutionCalc = "";
        resetAll();
    
        for (var increment = 0; increment < lengthEq; increment++) {
            eqIndex = increment;
            remainingChars = lengthEq - increment;
            if (increment === 0){
                pickNumP();
            } else if (remainingChars > (maxParenths*2)){
                if (midLegalCharTest() === 'Nums'){
                    pickNums();
            } else if (midLegalCharTest() === 'NumP'){
                pickNumP();
            } else {
                pickFromAllChars();
            }
            } else {
                if (endLegalCharTest() === 'close'){
                    closeParenthAdd();
                } else if (endLegalCharTest() === 'NumP'){
                    pickNumP();
                } else if (endLegalCharTest() === 'Nums'){
                    pickNums();
                } else if (endLegalCharTest() === 'OpNums'){
                    pickOpNums();
                } else if (endLegalCharTest() === 'Ops'){
                    pickOps();
                } else {
                    pickFromAllChars();
                }
            }
        }
        for (var x = 0; x < lengthEq; x++){
            if (possibleNums.includes(equation[x]) && equation[x+1] === 'o'){
                solutionCalc += equation[x];
                solutionCalc += '*';
            } else if ('d'.includes(equation[x])){
                solutionCalc += '/';     
            } else if ('m'.includes(equation[x])){
                solutionCalc += '*';     
            } else if ('e'.includes(equation[x])){
                solutionCalc += '^';     
            } else if ('c'.includes(equation[x]) && possibleNums.includes(equation[x+1])){
                solutionCalc += ')';
                solutionCalc += '*';     
            } else if ('o'.includes(equation[x])){
                solutionCalc += '(';     
            } else if ('c'.includes(equation[x])){
                solutionCalc += ')';     
            } else {
                solutionCalc += equation[x];
            }
        }
        console.log("Final Eq.: " + equation);
        console.log(equation);
        console.log(solutionCalc);
        return solutionCalc;
    }

    function isInvalid(input=""){
        let checkEq = input;
        let charHolder = [];
        let indexHolder = [];
        for (var y =0; y < checkEq.length; y++){
            if ("+-mdeoc/*^p()".includes(checkEq[y])){
                charHolder.push(checkEq[y]);
                indexHolder.push(y);
            } else {
                console.log("was a number");
            }
        }
        for (var z =1; z < charHolder.length; z++){
            if (indexHolder[z] === (indexHolder[z-1] + 1) && !(charHolder[z] === '(' && charHolder[z-1] === '*')){
                console.log("We Caught an invalid eq!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                return true;
            } else {
                console.log(charHolder + ' : ' + indexHolder);
                console.log("Naw, we think " + solutionCalc + " is valid!!");
            }
        }
        return false;
    }

    function resetAll(){
        equation = [];
        dailySolution = 0;
        solutionCalc = "";
        eqIndex = 0;
        remainingChars = 10;
        finalEquation = [];
        maxParenths = 2;
        mostRecentChar = "";
        mostRecentNum = "";
        mostRecentOp = "";
        openParenthCount = 0;
        closeParenthCount = 0;
        reservedChars = 0;
    }

    function runner(){
        resetAll();
        let checkThisOut = makeEquation(10);
        if (isInvalid(checkThisOut)){
            resetAll();
            runner();
        } else {
            dailySolution = math.evaluate(checkThisOut);
        }
        console.log(dailySolution);
        if (dailySolution < 1 || dailySolution%1 !== 0 || dailySolution > 999 || numOpCount() < 3){
            runner();
        } else {
            if ((dailySolution.toString()).length === 1){
                dailySolution = "00" + (dailySolution.toString());
            } else if ((dailySolution.toString()).length === 2){
                dailySolution = "0" + (dailySolution.toString());
            } else{
                dailySolution = (dailySolution.toString());
            }
            let ret = [dailySolution,checkThisOut]
            return ret;
        }
    }

    function dailyEquationGeneration(){
        const fin = runner();
        setEq(fin[1]);
        setSolutionFin(fin[0]);
        console.log(eq + solutionFin);
    }

    const timer = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
        dailyEquationGeneration();
    }, timer);

    return () => clearInterval(interval); 
    }, [])

    return (
        <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-center mb-5">
                <h2 class='text-success pt-2'> Today's Solution</h2>
                <p class="equals">=</p>
                <p class="solutionGridAns bg-success text-white" id={`todayAnsSpot1`}>{solutionFin[0]}</p>
                <p class="solutionGridAns bg-success text-white" id={`todayAnsSpot2`}>{solutionFin[1]}</p>
                <p class="solutionGridAns bg-success text-white" id={`todayAnsSpot3`}>{solutionFin[2]}</p>
            </div>
            <div>
                <p>Equation: {eq}</p>
                <p>Solution: {solutionFin}</p>
            </div>
        </div>
        
    )
}

export default Equation;