export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sunNum = 0;
  for (const i in source) {
    sunNum += source[i];
  }
  return sunNum;
}
