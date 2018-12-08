import './index.css'

class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

console.log(greeter.greet())


function test(str: string = '123'){
    return str
}

console.log(test('test'))


console.log(12321231312);