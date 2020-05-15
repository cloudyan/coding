/*!
 * @Author: a791446794@163.com
 * @Created at: yyyy-05-dd 11:13:07
 * 功能说明: 进制转换
 *
 * 将一个数字转为使用 A-Z 表示的 26 进制，0->A ... 25->B
 */

function num2letter(num) {
  let slice = '';
  do {
    slice = String.fromCharCode(65 + (num % 26)) + slice;
    num = Math.floor(num / 26);
  } while (num > 0);

  return slice;
}

// test
var i = 0;
while (i < 27) {
  console.log(num2letter(i++));
}
