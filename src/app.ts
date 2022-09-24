class Department{
    // private readonly id: string;
    // private name: string;
    private employees:string[] = [];

    // readonly: 값 변경되지않게
    constructor(private readonly id:string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    // 메소드추가
    describe(this: Department) {
        // describe가 실행될때 this는 Department 클래스에 기반한 인스턴스를 참조해야한다
        console.log(`Department (${this.id}): ${this.name}`);
    }

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
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'IT');
    }

    addReport(text: string) {
        this.reports.push(text);   
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['max']);

it.addEmployee('max');
it.addEmployee('manu');

// it.employees[2] = 'anna'; // private속성은 이렇게 접근할수없다

it.describe(); // it 객체 참조
it.name = 'new name';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('somthing');

accounting.printReports();

// const itCopy = { name: 's', describe: it.describe };

// itCopy.describe();