abstract class Department{
    // 정적 속성 추가, 정적 속성은 인스턴스에서 유효하지않다 
    // 정적속성과 정적 메소드의 전체적인 개념은 인스턴스와 분리되어 있기 때문
    static fiscalYear = 2022;

    // private readonly id: string;
    // private name: string;
    protected employees:string[] = [];

    // readonly: 값 변경되지않게
    constructor(protected readonly id:string, public name: string) {
        // this.id = id;
        // this.name = n;
        console.log(Department.fiscalYear); // 정적 속성에 접근하기위함
    }

    // 정적 메소드 예
    static createEmployee(name: string) {
        return {name: name};
    }

    // 메소드추가
    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('it department - id: ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    // 게터 : 값을 가지고올때 함수나 메소드를 실행하는 속성
    get mostRecentReport() {
        if(this.lastReport) {
            // 리포트가 입력된게 있는지
            return this.lastReport;
        }
        throw new Error('리포트를 찾을수 없음');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('유효한 값을 전달해주세요');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);

        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string) {
        if(name === 'max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);   
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['max']);

it.addEmployee('max');
it.addEmployee('manu');

// it.employees[2] = 'anna'; // private속성은 이렇게 접근할수없다

it.describe(); // it 객체 참조
it.name = 'new name';
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = '최근리포트';
accounting.addReport('somthing');
// mostRecentReport 를 속성으로 접근
console.log(accounting.mostRecentReport);



accounting.addEmployee('max');
accounting.addEmployee('manu');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const itCopy = { name: 's', describe: it.describe };

// itCopy.describe();