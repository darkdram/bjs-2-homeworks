function parseCount(dirtyNumber) {
    let cleanNumber = new Number(dirtyNumber);

    if (isNaN(cleanNumber)) {
        throw new Error("Невалидное значение");
    }

    return cleanNumber;
}

function validateCount(dirtyNumber) {
    try {
        let number = parseCount(dirtyNumber);
        return number;
    }
    catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        if(a + b < c || b + c < a || a + c < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let halfOfPerimeter = this.getPerimeter() / 2;
        let area = Math.sqrt(halfOfPerimeter * (halfOfPerimeter - this.a) * (halfOfPerimeter - this.b) * (halfOfPerimeter - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    }
    catch (e) {
        return {
            getPerimeter: function() {
                return "Ошибка! Треугольник не существует";
            },
            getArea: function () {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}