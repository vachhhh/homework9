// first exercise

// part a

class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;

    }

    get nameGetter() {
        return this._name
    }

    get emailGetter() {
        return this._email
    }

    get genderGetter() {
        return this._gender
    }

    set nameSetter(name) {
        if (name) {
            return this._name = name
        }
    }

    set emailSetter(email) {
        if (email) {
            return this._email = email
        }
    }

    set genderSetter(gender) {
        if (gender) {
            return this._gender = gender
        }
    }

    toString() {
        return JSON.stringify(this)
    }
}

let author1 = new Author('Karen', 'Kirakosyan', 'male')
let author2 = new Author('Taguhi', 'Asatryan', 'female')
let author3 = new Author('Svetlana', 'Vardanyan', 'female')

console.log(author1.toString())
console.log(author2.toString())


console.log(author3)


// part b

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;


    }

    get nameGetter() {
        return this._title
    }

    get authorGetter() {
        return this._author
    }

    get priceGetter() {
        return this._price
    }

    get quantityGetter() {
        return this._quantity
    }

    set nameSetter(title) {
        if (title) {
            this._title = title
        }
    }

    set emailSetter(email) {
        if (email) {
            this._author = email
        }
    }

    set priceSetter(price) {
        if (price) {
            this._price = price
        }
    }

    set quantitySetter(quantity) {
        if (quantity) {
            this._quantity = quantity
        }
    }

    toString() {
        return JSON.stringify(this)
    }

    getProfit() {
        return this.priceGetter * this.quantityGetter
    }
}


let book1 = new Book('uhuhuhuh', 'werwerqew', 3000, 5)
book1.quantitySetter = 10
console.log(book1)



// second exercise 


class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;

    }

    get idGetter() {
        return this._id
    }

    get nameGetter() {
        return this._name
    }

    get balanceGetter() {
        return this._balance
    }

    set nameSetter(newName) {
        this._name = newName
    }

    set balanceSetter(balance) {
        this._balance = balance
    }

    toString() {
        return JSON.stringify(this)
    }

    credit(amount) {
        if (!amount || isNaN(+amount)) {
            alert('Your amount is not correct')

        } else {
            this._balance += +amount

        }
        return this.balanceGetter

    }

    debit(amount) {
        if (this.balanceGetter > amount) {
            this._balance -= amount
        } else {
            alert('Amount exceeded balance.')
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount && !isNaN(amount) && this.balanceGetter > amount) {
            this._balance -= amount
                // anotherAccount += this.balanceGetter
            anotherAccount += amount

        } else {
            alert('Amount exceeded balance.')
        }
        console.log(anotherAccount)
        return this.balanceGetter
    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (JSON.stringify(accountFirst) == JSON.stringify(accountSecond)) {
            alert('They are the same objects')
        } else {
            if (accountFirst.idGetter > accountSecond.idGetter) {
                console.log(`First account id is bigger(${accountFirst.idGetter}) then second's accound id ${accountSecond.idGetter}`)
            } else if (accountFirst.idGetter < accountSecond.idGetter) {
                console.log(`Second account id is bigger(${accountSecond.idGetter}) then firth's accound id ${accountFirst.idGetter}`)
            } else {
                console.log('They are the same')
            }

            if (accountFirst.balanceGetter > accountSecond.balanceGetter) {
                console.log(`First account id is bigger(${accountFirst.balanceGetter}) then second's accound id ${accountSecond.balanceGetter}`)
            } else if (accountFirst.balanceGetter < accountSecond.balanceGetter) {
                console.log(`Second account id is bigger(${accountSecond.balanceGetter}) then firth's accound id ${accountFirst.balanceGetter}`)
            } else {
                console.log('They are the same')
            }

        }
    }

}

let account1 = new Account(4, 'Aramz', 3002)
let account2 = new Account(5, 'Aram', 3001)




console.log(Account.identifyAccounts(account1, account2))


// third exercise


class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstnameGetter() {
        return this._firstName
    }

    get lastnameGetter() {
        return this._lastName
    }

    get genderGetter() {
        return this._gender
    }

    get ageGetter() {
        return this._age
    }

    set firstnameSetter(firstname) {
        if (firstname) {
            this._firstName = firstname
        }
    }

    set lastnameSetter(lastname) {
        if (lastname) {
            this._lastName = lastname
        }
    }

    set genderSetter(gender) {
        if (gender) {
            this._gender = gender
        }
    }

    set ageSetter(age) {
        if (age) {
            this._age = age
        }
    }

    toString() {
        return JSON.stringify(this)
    }

}

// let person = new Person('vch', 'ners', 'male', 15)

class Student extends Person {
    constructor(firstName, lastName, gender, age, year, fee) {
        super(firstName, lastName, gender, age)
        this._program = [];
        this._year = year;
        this._fee = fee
    }

    get programGetter() {
        return this._program
    }

    get yearGetter() {
        return this._year
    }

    get feeGetter() {
        return this._fee
    }

    set programSetter(prograpp) {
        if (prograpp) {
            this._program = prograpp
        }
    }


    set yearSetter(year) {
        if (year) {
            this._year = year
        }
    }


    set feeSetter(fee) {
        if (fee) {
            this._fee = fee
        }
    }

    toString() {
        return JSON.stringify(this)
    }

    passExam(program, grade) {

        if (grade >= 50) {
            this._year++;
            this.programGetter.push(program)
        }
    }

}

let student1 = new Student('vch', 'ners', 'male', 15, 0, 500000)


// console.log(student1.passExam('frontendfeveloper', 51))
// console.log(student1.passExam('fullstackfeveloper', 71))
// console.log(student1.passExam('zxcz', 111))


class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age)
        this._program = program;
        this._pay = pay;

    }

    get programGetter() {
        return this._program
    }

    get payGetter() {
        return this._pay
    }

    set programSetter(prog) {
        if (prog) {
            this._program = prog
        }
    }

    set paySetter(pay) {
        if (pay) {
            this._pay = pay
        }
    }

    toString() {
        return JSON.stringify(this)
    }

}


let teacher1 = new Teacher('vch', 'ners', 'male', 25, 'armenian', 54400)

console.log(teacher1.toString())