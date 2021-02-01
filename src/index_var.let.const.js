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

//javascriptのオブジェクトや配列に関しては、値を変えることができちゃう

//objectの定義
const val4 = {
  name: "Joe",
  age: 28
};
//console.log(val4);
//コンソールログにて、nameというプロパティにJoe、
//ageというプロパティに28とは言っていることを確認できる

//objectのプロパティに入るときは.(ドット)を使用
val4.name = "Adam";
//プロパティの追加も可能
val4.address = "Washington";
console.log(val4);

//まとめ：constで定義したオブジェクトは、プロパティの変更が可能
//配列も以下の通り変更可能。Reactではほぼほぼconstを使用する
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
