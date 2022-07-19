let numRevealedChars = 4

function reveal(){

    let postEq = "7+16+22/11";
    const numOfOpsToReveal = 2;

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

    console.log("result: " + result)
    const result2 = [revealTheseChars,revealTheseOps]
    console.log("result2: " + result2)
    return result2;
        
    }

    
    reveal();
