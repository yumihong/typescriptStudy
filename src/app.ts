// 제네릭 기능
/*
const names: Array<string> = [];
// names[0].split(' ');

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});

promise.then(data => {
    // 숫자를 반환해서 split을 호출할수없다는 것을 ts가 안다 
    // 제네릭 타입을 사용하면 보다 나은 타입 안전성을 확보할 수 있다
    // data.split(' ');
})
*/

// 제네릭 함수 생성하기
// T extends object : T 타입이 어떤 구조를 가지든 객체여야 한다
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'max', hobbies: ['Sports'] }, {age: 30});

console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = '값이 없습니다.';

    if(element.length === 1){
        descriptionText = '1개의 요소가 있다.';
    }else if(element.length > 1){
        descriptionText = element.length + '개의 요소가있다';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('안녕'));

// <T extends object, U extends keyof T>
// 첫번째 매개변수는 모든 유형의 객체
// 두번째 매개변수는 해당 객체의 모든 유형의 키여야 한다.
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'value' + obj[key];
}

extractAndConvert({ name: 'max' }, 'name');

// 제네릭 클래스
// string | number | boolean 이런 타입하고만 작동해야된다
class DataStorage<T extends string | number | boolean> {
// class DataStorage{
    // 문자열, 숫자, 불리언이 혼합된 배열이라고 인지
    // private data: (string|number|boolean)[] = [];
    private data: T[] = [];

    addItem(item: T){
    // addItem(item: string|number|boolean){
        this.data.push(item);
    }

    removeItem(item: T){
    // removeItem(item: string|number|boolean){
        if (this.data.indexOf(item) === -1){
            // 배열을 찾지 못했을때
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'manu'});
// objStorage.removeItem(maxObj);

// console.log(objStorage.getItems());


// 제네릭 유틸리티 타입
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['max', 'Anna'];
// names.push('manu'); readonly 속성때문에 에러가 발생

