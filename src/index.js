module.exports = function getZerosCount(number) {
  let res = 0;
  while(number > 0){
    number /= 5;
    let number1 = ~~number; 
    res += number1;
  }
  return res;
}
