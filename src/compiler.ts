let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1:number, n2:number) {
    if(n1 + n2 > 0){
        return n1+n2;
    }
    
}

function clickHandler(message: string) {
    console.log('click' + message);
}

if(button) {
    button.addEventListener('click', clickHandler.bind(null, 'you'));
}