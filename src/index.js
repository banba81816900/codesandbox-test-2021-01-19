/**
 * const let の変数宣言
 */

var val1 = "var変数";
console.log(val1);
//var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

//var変数の再宣言
var val1 = "var変数を再宣言";
console.log(val1);

//let変数
let val2 = "let変数";
console.log(val2);

//let変数は上書き可能
val2 = "let変数を上書き";
console.log(val2);

//let変数は再宣言不可
//let val2 = "let変数を再宣言"→できない

const val3 = "val3変数";
console.log(val3);

//constは上書き・再宣言不可
