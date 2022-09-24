// 인터페이스 : 객체의 구조를 정의

// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

// let add: AddFn;

// add = (n1: number, n2: number) => {
//     return n1 + n2;
// };

interface Named {
    readonly name?: string;
    outputName?: string; // 선택사항
}


interface Greetable extends Named{
    greet(phrase: string): void;
}

// 클래스상속은 하나만 가능하지만 인터페이스는 , 를 이용하여 여러개 가능
class Person implements Greetable {
    name?: string;
    age = 30;

    // 선택적 매개변수 
    constructor(n?: string) {
        if(n){
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        } else{
            console.log('아무 참조값이 없음');
        }

    }
}

let user1: Greetable;

user1 = new Person('max');

user1.greet('안녕하세요');
console.log(user1)