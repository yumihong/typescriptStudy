let userInput: unknown; // 알수없는타입
// let userName: string;

userInput = 5;
userInput = 'max';

if(typeof userInput === 'string'){
    // userName = userInput; // 알수없는 타입은 문자열에 할당할 수 없음
}

function generateError(message: string, code: number): never {
    // never: 아무것도 반환하지 않는다는 것
    throw {message: message, errorCode: code};    
}

generateError('에러발생', 500);