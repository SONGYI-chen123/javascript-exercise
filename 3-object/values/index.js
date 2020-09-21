export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  var sunNum = 0;
  for(let i in source){
    sunNum += source[i];
  }
  return sunNum;
}
