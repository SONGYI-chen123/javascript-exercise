// TODO 11: 在这里写实现代码
export default class Student  {
  constructor(name, age, klass) {
    this.name = name;
    this.age = age;
    this.klass = klass;
  }

  introduce() {
    const result = `I am a Student. I am at Class ${this.klass}.`;
    return result;
  }
}