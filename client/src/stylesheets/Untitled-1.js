// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise Resolved');
//   }, 1000);
// });
// const func = async () => {
//   const res = await promise;
//   console.log(res);
// };
// func();
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    const name = this.name;
    console.log(`Hello ${name}`);
  }
}
const p1 = new Person('Ridam');
p1.greet();
