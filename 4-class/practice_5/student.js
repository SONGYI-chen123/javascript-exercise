// TODO 19: 在这里写实现代码
import Person from './person';
export default class Student extends Person {
  constructor(name, age, klass) {
    super(name,age);
    this.klass = klass;
  }

  introduce() {
    const IntroduceString = `'My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class  ${this.klass}.`;
    return IntroduceString;
  }
}