export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let findPerson = collection.find((element) => {
    element.age >= 10 && element.age <= 20;
  });
  return findPerson.name;
}
