
import React, {useEffect, useState, useCallback} from 'react';
import {create, all} from 'mathjs';
import axios from 'axios';

const EquationGeneration = (props) =>{

    const {eq, setEq, solutionFin, setSolutionFin} = props;

    const config = { }
    const math = create(all, config)

    const equationLength = 10;
    const numOfOpsToReveal = 2;
    const numRevealedChars = 4;

    let postEq = "";
    let postSol = "";
    let postDate = "";
    let resultIndexes = "";

    let possibleCharIndexes = ""
    let possibleOpIndexes = ""
    let revealTheseChars = [];
    let revealTheseOps = [];

    function createEq(){

        const maxExponents = 1;
        const possibleEdgeNums = "123456789"
        const possibleNums = "0123456789";
        const possibleOps = "^*/+-";
        const possibleOpsPostExp = "*/+-"
        const possibleSuperscript = "23";

        let initialEq = "";
        let expCount = 0;

        for(let i = 0; i < equationLength; i++){
            //first and last indexes must be numbers
            if(i === 0 || i === equationLength){
                initialEq += possibleEdgeNums[Math.floor(Math.random()*possibleEdgeNums.length)];
            } 
            //must then insert a number if last char was operator
            else if(possibleOps.includes(initialEq[i-1])) {
                if(initialEq[i-1] === '^'){
                    initialEq += possibleSuperscript[Math.floor(Math.random()*possibleSuperscript.length)];
                } else {
                    initialEq += possibleEdgeNums[Math.floor(Math.random()*possibleEdgeNums.length)];
                }
            }
            //or last char is a number
            else{
                //last char is number and two chars ago was exponent, must then be an operator
                if(initialEq[i-2] === '^'){
                    initialEq += possibleOpsPostExp[Math.floor(Math.random()*possibleOpsPostExp.length)];
                }
                //if all other excpetions aren't met, then lastly can be any num or operator
                else{
                    //but, we only want {maxExponents} number of exponents, so we must check if we have our maximum, or if we're making a two digit num get an exp, or exp on a 0
                    if( expCount === maxExponents || (possibleNums.includes(initialEq[i-1]) && possibleNums.includes(initialEq[i-2])) || initialEq[i-1] === '0' ){
                        initialEq += (possibleNums+possibleOpsPostExp)[Math.floor(Math.random()*(possibleNums+possibleOpsPostExp).length)];
                    } else {
                        initialEq += (possibleNums+possibleOps)[Math.floor(Math.random()*(possibleNums+possibleOps).length)]
                        if(initialEq[i] === '^'){
                            expCount++;
                        }
                    }
                }
            }
        }
        return initialEq;
    }

    // var date = new Date();
    // date.setDate(date.getDate() + 1)

    function equationEvaluator(num){
        let testEq = createEq();
        let dailySolution = math.evaluate(testEq);

        if ( (!Number.isInteger(dailySolution)) || dailySolution < 1 || dailySolution > 999){
            equationEvaluator();
        } 
        else {
            if ((dailySolution.toString()).length === 1){
                dailySolution = "00" + (dailySolution.toString());
            } else if ((dailySolution.toString()).length === 2){
                dailySolution = "0" + (dailySolution.toString());
            } else{
                dailySolution = (dailySolution.toString());
            }
            postEq = testEq;
            postSol = dailySolution;
            var date = new Date();
            date.setDate(date.getDate() + num);
            postDate = date.toString().substring(4,15).replace(/\s+/g, '');
        }
    }

    function reveal(){

        equationEvaluator(1)
    
        let possibleCharIndexes = ""
        let possibleOpIndexes = ""
    
        for(let i = 0; i<postEq.length; i++){
            if("^*/+-".includes(postEq[i])){
                possibleOpIndexes += i;
            } else {
                possibleCharIndexes += i;
            }
        }
    
        let revealTheseChars = [];
        let revealTheseOps = [];
        
        for(let x = 0; x < numOfOpsToReveal; x++){
            let randIndex = Math.floor(Math.random()*possibleOpIndexes.length); //rand index
            let randOp = possibleOpIndexes.charAt(randIndex); //char from string of nums
            if(randIndex === 0){
                possibleOpIndexes = possibleOpIndexes.substring(1,possibleOpIndexes.length); //remove index for no repeat indexes
                revealTheseOps.push(randOp); //put that index in index holding array
            } else {
                possibleOpIndexes = (possibleOpIndexes.slice(0,randIndex) + possibleOpIndexes.slice(randIndex+1,possibleOpIndexes.length));
                revealTheseOps.push(randOp);
            }
        }
    
        for(let x = 0; x < numRevealedChars-numOfOpsToReveal; x++){
            let randIndex = Math.floor(Math.random()*possibleCharIndexes.length); //rand index
            let randChar = possibleCharIndexes.charAt(randIndex); //char from string of nums
            if(randIndex === 0){
                possibleCharIndexes = possibleCharIndexes.substring(1,possibleCharIndexes.length); //remove index for no repeat indexes
                revealTheseChars.push(randChar); //put that index in index holding array
            } else {
                possibleCharIndexes = (possibleCharIndexes.slice(0,randIndex) + possibleCharIndexes.slice(randIndex+1,possibleCharIndexes.length));
                revealTheseChars.push(randChar);
            }
        }
    
        let result = ""
            for(let j = 0; j < revealTheseChars.length; j++){
                result += revealTheseChars[j]
            }
            for(let k = 0; k < revealTheseOps.length; k++){
                result += revealTheseOps[k]
            }
            
        }

    function trigger() {
            reveal(1);

            console.log("eq: " + postEq + ", sol: " + postSol + ", revealInd: " + resultIndexes + ", date: " + postDate)
            // axios.post(`http://localhost:8000/api/numericle`,{
            //     equation: postEq,
            //     solution: postSol,
            //     date: postDate,
            //     revealindexes: resultIndexes
            // })
            // .then((res)=>{
            //     console.log(res);
            //     console.log(res.data);
            //     resultIndexes = ""
            // })
            // .catch((err)=>{
            //     console.log("genEq error",err)
            // })
        
    }
        
        
    


    // const timer = 5000;

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     dailyEquationGeneration();
    // }, timer);

    // return () => clearInterval(interval); 
    // }, [solutionFin])

    let isTriggered = false

    useEffect(()=>{
        if(!isTriggered){
            trigger()
        }
        
    })

    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center mb-5">
                <h2 className='text-success pt-2'> Today's Solution</h2>
                <p className="equals">=</p>
                <p className="solutionGridAns bg-success text-white" id={`todayAnsSpot1`}>{solutionFin[0]}</p>
                <p className="solutionGridAns bg-success text-white" id={`todayAnsSpot2`}>{solutionFin[1]}</p>
                <p className="solutionGridAns bg-success text-white" id={`todayAnsSpot3`}>{solutionFin[2]}</p>
            </div>
            <div>
                <p className="text-danger">Equation: {eq}</p>
                <p className="text-danger">Solution: {solutionFin}</p>
            </div>
        </div>
        
    )
}

export default EquationGeneration;
