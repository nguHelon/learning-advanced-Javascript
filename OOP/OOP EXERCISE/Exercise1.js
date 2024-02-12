// 1
class BankAccount {
    constructor(accountNumber, owner, balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

// 2
class SavingsAccount extends BankAccount {
    constructor(accountNumber, owner, balance, interestRate) {
        super(accountNumber, owner, balance);
        this.interestRate = interestRate;
    }

    userInterest(years) {
        return this.balance * this.interestRate * years;
    }
}

// 3
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    bookDescription() {
        return `The book entitled ${this.title} is written by ${this.author} and it has ${this.pages} pages`;
    }
}

// 4
class Ebook extends Book {
    constructor(title, author, pages, format, sizeInMb) {
        super(title, author, pages);
        this.format = format;
        this.sizeInMb = sizeInMb;
    }

    bookDescription() {
        return `The book entitled ${this.title} is written by ${this.author} and it has ${this.pages} pages and the Ebook version of it is ${this.sizeInMb}MB heavy and it is in ${this.format} format`;
    }
}

// 5
class TodoList {
    constructor(tasks) {
        this.tasks = tasks;
        this.status = "in progress";
    }

    addTask(task) {
        this.tasks.push(task);
    }

    completed() {
        this.status = "completed";
    }

    displayAllTask() {
        return this.tasks.map((task, i) => `Task ${i + 1}: ${task}`).join("\n");
    }
}