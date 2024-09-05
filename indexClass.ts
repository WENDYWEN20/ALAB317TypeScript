const learnerName: string='Max';
const lastName: string='Bill'
let age: number=28;

const favNumbers: number[]=[1,2,3]
favNumbers.push('four')
favNumbers.push(5)
let authenticated: boolean=true
const language:string[]=['JS','TS','C#','Python']


language.push('R')
language.push(C++)
language.trim()


const company:{name:string, value:number}={name:'Microsoft', value:300}
const colorsArray: Array<{colorName: string}> =[]
const ourTuple:[number, boolean, string] =[11, true, 'assignEqualsTo']
let otherTuple:[number, boolean, string];


function compute(): [number, number]{

    let x=1;
    let y=3;
    return [x,y]
}

const result=compute()


// Types
type Course={
    name:string,
    date:Date,
}
const tsCourse:Course={
    name:'TS100',
    date:Date,
}

//interface can be treated as a class, which can be extended
 export interface Car{
    brand:string;
    model:string;
    price:number;
    
 }
function add(a:number, b: number): number{return a+b}