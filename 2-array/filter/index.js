function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const newCollection = collection.filter(x => {
    return x % 3 === 0;
  });
  return newCollection;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const noRepeatCollection = collection.filter((element, index, self) => {
    return self.indexOf(element) === index;
  });
  return noRepeatCollection;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
