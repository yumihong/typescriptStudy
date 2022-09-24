// const userName = 'max';
// let age = 30;

// age = 29;

// let result;

// function add(a:number, b:number){
  
//     result = a + b;
//     return result;
// }
 
const addFun = (a: number, b:number = 1) => a + b;

console.log(addFun(2, 5))

const printOutput: (a:number | string) => void = output => console.log(output);

printOutput(addFun(5));

const hobbies = ['sports', 'cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person2 = {
    firstName: 'max',
    age: 30
};

const copiedPerson = { ...person2};
console.log(copiedPerson)

const addFunction = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
};

const addedNumbers = addFunction(5, 10, 5);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies; 
// hobbies 문자열 요소가 2개 이상인경우 remaining에 들어감

const { firstName: userName, age } = person2;
// :userName 은 person2에서 추출하고자하는 rename속성의 별칭을 지정하는것
console.log(userName, age)

