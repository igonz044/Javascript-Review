function arraySwap(){
    let myArray = ['1','2','3'];
    
    //swap 1st and last integer
    let firstNum = myArray[0];
    let lastNum = myArray[myArray.length-1];

    myArray[0] = lastNum;
    myArray[myArray.length-1] = firstNum;
    console.log(myArray);
}
arraySwap();