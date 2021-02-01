// /**
//  * テンプレート文字列(文字列の中にJavaScriptの変数を組み込める)
//  */
// const name = "Joe";
// const age = 28;

// //従来の方法
// const message1 = "My name is " + name + "." + "I'm" + age + ".";
// console.log(message1);

// //template(Shift+@)
// const message2 = `My name is ${name}.I'm${age}.`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("This is func1."));

// const func2 = function (str) {
//   return str;
// };
// console.log(func2("This is func2."));

// //アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("This is func3."));

// const func4 = (str) => str;
// console.log(func4("This is func4."));

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func5(10,20));

// const func6 = (num1,num2) => num1 + num2;
// console.log(func6(20,20));

/**
 * 分割代入
 */

// const myProfile = {
//   name : "Joe",
//   age : 28
// };

// const message1 = `My name is ${myProfile.name}.I'm ${myProfile.age}.`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `My name is ${name}.I'm ${age}.`;
// console.log(message2);

// const myProfile = ["Joe", 28];
// const message3 = `My name is ${myProfile[0]}.I'm ${myProfile[1]}.`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `My name is ${name}.I'm ${age}.`
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name) => console.log(`Hello,${name}!`);
// sayHello("Mai");
// sayHello();

// const sayHello_default = (name = "Guest") => console.log(`Hello,${name}!`);
// sayHello_default();

/**
 * スプレッド構文(...)
 */
// //配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

//配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
//const nameArr = ["Shiraishi", "Saito", "Nishino"];
//従来
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目：${nameArr[index]}`);
// }
//mapの基本　配列に対して使える関数・・？？
// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index + 1}番目：${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=> {
//   return num % 2 === 1;
// })

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "Saito") {
//     return name
//   } else {
//     return `${name}は卒業しました`
//   }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */
//ある条件？条件がtrue値の時：条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = '1300';
// //console.log(num.toLocaleString());

// const formattedNum = typeof num == 'number' ? num.toLocaleString() : '数値を入力してください' ;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));
// console.log(checkSum(50, 30));
