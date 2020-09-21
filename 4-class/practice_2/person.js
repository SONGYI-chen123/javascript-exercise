// TODO 10: 在这里写实现代码
export default class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static introduce() {
      const IntroduceString = `My name is ${this.name}. I am ${this.age} years old.`;
      return IntroduceString;
    }
  }