export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let num = 0;
  for( let i = 0;i<collection.length ;i += 1){
    let subCollection = collection[i].subString(0,1);
    if(subCollection === '粤A'){
      num += 1;
    }
  }
  return num;
}
