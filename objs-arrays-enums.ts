// const person: {
//     // {} 이것이 객체라고 알려주는것 
//     // 타입스크립트가 객체타입을 이해하게 하려면 이렇게 입력해야한다
//     name: string;
//     age: number
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;  // 문자열 자리에 숫자가 들어가서 에러남



// string []의 경우 배열안에는 문자열만 들어갈 수 있다
// any[] 는 문자열, 숫자 혼합 가능
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if(person.role === Role.AUTHOR){
    console.log('is author')
}