function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark)
    }
};

Student.prototype.getAverage = function () {
    if (this.marks) {
        let sumOfMarks = this.marks.reduce(function (acc, cv, idx, arr) {
            return acc + cv;
        }, 0);
        return sumOfMarks / this.marks.length
    }
};

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
};