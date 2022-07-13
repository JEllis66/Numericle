import React, {useEffect, useState} from 'react';
import {create, all} from 'mathjs';

const EquationGeneration = (props) =>{

    const config = { }
    const math = create(all, config)

    const [eq, setEq] = useState("");
    const [solutionFin, setSolutionFin] = useState("");

    const equationLength = 10;


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

    function equationEvaluator(){
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
            let result = [testEq,dailySolution];
            return result;
        }
    }

    function dailyEquationGeneration(){
        const fin = equationEvaluator();
        setEq(fin[0]);
        setSolutionFin(fin[1]);
        console.log(eq + solutionFin);
    }

    const timer = 60000;

    useEffect(() => {
        const interval = setInterval(() => {
        dailyEquationGeneration();
    }, timer);

    return () => clearInterval(interval); 
    }, [solutionFin])

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

export default EquationGeneration;