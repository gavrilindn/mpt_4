import { getDiff } from "./fun";
let date = new Date();
console.log(date);
let ans = getDiff(date);
console.log(ans);
let res = ans.split(".");
let str_timer = `${res[0]} monts ${res[1]} days ${res[2]} hours`;
console.log("Until the New Year left: ", str_timer);
