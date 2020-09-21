// TODO 14: 在这里写实现代码
import Person from './person';
export default class Person {
    constructor(name, age) {
      super(name,age);
    }
  
    static introduce() {
      const IntroduceString = `I am a Worker. I have a job.`;
      return IntroduceString;
    }
}