class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

/** ------------------------------------------ */

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let _book = this.books.filter(book => book[type] === value);
        return _book.length ? _book[0] : null;
    }

    giveBookByName(bookName) {
        let _bookIndex = this.books.findIndex(book => book.name == bookName);
        return _bookIndex >= 0 ? this.books.splice(_bookIndex)[0] : null;
    }
}

/** ------------------------------------------ */
class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addGrade(mark, subject) {
        if (this.marks[subject] === undefined) {
            this.marks[subject] = [];
        }

        if (mark < 0 || mark > 5) {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        } else {
            this.marks[subject].push(mark);
        }
    }

    getName() {
        return this.name;
    }

    getAverageBySubject(subject) {
        if (this.marks[subject]) {
            let sumOfMarks = this.marks[subject].reduce((accumulative, currentValue) => accumulative + currentValue, 0);
            return sumOfMarks / this.marks[subject].length;
        }
    }

    getTotalAverage() {
        if (!this.marks) {
            return 0;
        }

        let totalMarks = 0;
        let totalMarksSum = 0;

        for(let _subject in this.marks) {
            totalMarks += this.marks[_subject].length;
            totalMarksSum += this.marks[_subject].reduce((accumulate, currentMark) => accumulate + currentMark, 0);
        }

        return totalMarksSum / totalMarks;
    }

    exclude(reason) {
        this.excluded = reason;
        delete this.marks;
    }
}
