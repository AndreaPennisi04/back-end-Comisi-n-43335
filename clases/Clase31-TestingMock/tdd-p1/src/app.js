import { login } from "./auth.login.js";
import { calculo } from "./maths.js";

const user = {
  name: "coderUser",
  password: "123",
};

const isAuth = login(user.name, user.password);
console.log("🚀 ~ file: app.js:9 ~ isAuth:", isAuth);

//No me anda
// const suma ={
//   primerValor : 4,
//   segundoValor: 4,

//   const isMath = calculo(suma.primerValor, suma.segundoValor);
// console.log("🚀 ~ file: app.js:9 ~ isAuth:", isMath );
// }

// const suma = (...nums) => {
//   if (nums.length === 0) return 0;
//   if (!nums.every((num) => typeof num === "number")) return null;
//   return nums.reduce((prev, current) => prev + current);
// };
