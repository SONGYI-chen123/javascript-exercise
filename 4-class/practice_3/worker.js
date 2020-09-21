// TODO 14: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  static introduce() {
    const IntroduceString = `I am a Worker. I have a job.`;
    return IntroduceString;
  }
}
