class Employee {
    #salary;
    #isHired = true;
    static #allEmployees = [];

    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        Employee.#allEmployees.push(this);
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(amount) {
        this.#salary = amount;
    }

    getStatus() {
        return this.#isHired;
    }

    setStatus(command) {
        if (command === "hire") {
            this.#isHired = true;
        } else if (command === "fire") {
            this.#isHired = false;
        }
    }

    static getEmployees() {
        return Employee.#allEmployees;
    }

    // Static method to calculate the total payroll
    static getTotalPayroll() {
        return Employee.#allEmployees.reduce((total, employee) => total + employee.getSalary(), 0);
    }
}


module.exports = {
    Employee,
}
