import './index.css'
import './index.less'
import test from './test'


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


function test1(str: string = '123'){
    return str
}

console.log(test1('test123'))

console.log(test())


console.log(12321231312);


$('div').css('background','red')

console.log($);