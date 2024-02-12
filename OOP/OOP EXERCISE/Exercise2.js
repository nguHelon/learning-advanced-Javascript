class Employee {
    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getDepartment() {
        return this.department;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setDepartment(department) {
        this.department = department;
    }

    introduction() {
        return `Hi my name is ${this.name}, I am ${this.age} old and I am a ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, age, department, teamSize, reports) {
        super(name, age, department);
        this.teamSize = teamSize;
        this.reports = reports;
    }

    conductMeeting() {
        return `Meeting with all Employees on friday as 3pm`;
    }
}

class Developer extends Employee {
    constructor(name, age, department, projects, linesOfCodeWritten) {
        super(name, age, department);
        this.projects = projects;
        this.linesOfCodeWritten = linesOfCodeWritten;
    }

    writeCode() {
        return `It's time to code man!!!`;
    }

    allProjects() {
        return this.projects.map((project, i) => `Project ${i + 1}. ${project}`).join("\n");
    }
}

class Designer extends Employee {
    constructor(name, age, department, designTool, projects) {
        super(name, age, department);
        this.designTool = designTool;
        this.projects = projects;
    }

    createDesign() {
        return `making a flyer of a fintech company with ${this.designTool}`;
    }

    allProjects() {
        return this.projects.map((project, i) => `Project ${i + 1}. ${project}`).join("\n");
    }
}