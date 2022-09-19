function add2(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('result : ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// void 는 반환문이 없을때
// undefined는 실제 값을 반환하지 않을때 즉 return; 이 있어야한다 

// printResult(add(5, 12));
// console.log(printResult(add(5, 12))) void 함수라 undefined 가 출력됨
// ts 에선 undefined도 타입이다 

let combineValues: (a: number, b: number) => number;
// let은 기본적으로 any 타입이다
// 매개변수는 없고 결과는 number

combineValues = add2;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result)
});