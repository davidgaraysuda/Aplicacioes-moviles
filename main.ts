/*let total=function(input:number[]):number{
    let sum:number=0;
    for(let i=0;i<input.length;i++){
        if(isNaN(input[i])){
            continue;
        }
        sum=sum+input[i];
    }
    return sum;
}

console.log(total([2,4,8]))*/

let displayMessageAnon=function(message:string):string{
    return  "The message is" + " " + message;
}

console.log(displayMessageAnon("ADIOS"));

let displayMessage= (message:string)=>
    "The message is" + " " + message;


console.log(displayMessage("HOLA"));