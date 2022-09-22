class Department{
    // private id: string;
    // private name: string;
    private employees:string[] = [];

    constructor(private id:string, public name: string) {
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

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('max');
accounting.addEmployee('manu');

// accounting.employees[2] = 'anna'; // private속성은 이렇게 접근할수없다

accounting.describe(); // accounting 객체 참조
accounting.name = 'new name';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 's', describe: accounting.describe };

// accountingCopy.describe();