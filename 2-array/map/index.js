export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const transformCollection = collection.map(element => String.fromCharCode(element + 96));
  return transformCollection;
}
