// TODO 17: 在这里写实现代码
import Person from './person';
export default class Person {
    constructor(name, age) {
      super(name,age);
    }
  
    static introduce() {
      const IntroduceString = `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
      return IntroduceString;
    }
}