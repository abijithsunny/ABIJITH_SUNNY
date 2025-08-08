class calculator {
    constructor(a, b, operation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation.toLowerCase();

    }

    calculate() {
        if (this.operation === "add") {
            return this.a + this.b;
        } else if (this.operation === "subtract") {
            return this.a - this.b;
        } else if (this.operation === "multiply") {
            return this.a * this.b;
        } else if (this.operation === "divide") {
            if (this.b === 0) {
                return "error : zero can't be divided";
            }
            return this.a / this.b;
        } else {
            return 'Unknown error'
        }
    }
}
const cal = new calculator(100,10, "subtract")
console.log("result :", cal.calculate());
