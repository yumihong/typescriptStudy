// 인터섹션 타입 작성
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// 두 타입 결합
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

// 함수 오버로드 예
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable){
    // 타입가드 
    // 런타임시 코드가 정확하게 작동하게 해줌
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('max', 'schwarz');
result.split(' ');

const fetchedUserData = {
    id: 'ul',
    name: 'max',
    job: { title: 'ceo', description: 'my own company'}
};

console.log(fetchedUserData.job.title);

const userInput = '';

// ?? : NULL병합 연산자
// NULL 이나 undefined 일경우 DEFAULT 
const storedData = userInput ?? 'DEFAULT';

/*
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('name: ' + emp.name);

    if('privileges' in emp){
        console.log('privileges: ' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('privileges: ' + emp.startDate);
    }
}

printEmployeeInformation({name: 'manu', startDate: new Date()});

class Car {
    drive() {
        console.log('운전중');
    }
}

class Truck{
    drive() {
        console.log('트럭 운전중');
    }

    loadCargo(amount: number) {
        console.log(amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();

    if(vehicle instanceof Truck){ // instanceof : 바닐라js에 내장된 일반 연산자
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;

    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// 형 변환 : ts 가 직접 감지하지 못하는 특정타입의 값을 ts에 알려주는 역할
// index.html에 p 태그만 있는경우 화면에는 아무것도 출력되지 않음
// const paragraph = document.getElementById('message-output');

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// HTMLInputElement 타입의 값을 반환함
// ! 를 사용하여 !앞의 표현식을 NULL로 반환하지 않겠다고 TS 에 인식시킴
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// NULL을 반환하지 않을거라는 확신이 있을땐 if문 사용
const userInputElement = document.getElementById('user-input');

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = '안녕 여기있어';
}

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: '이메일 타입이 아님',
    username: '문자로 시작해야합니다!!'
}; */