import user from "./app.js";
console.log(user);

// import { username1 } from "./app.js";
// import { username2 } from "./app.js";
// import { username3 } from "./app.js";
// import { username4 } from "./app.js";

// console.log(username1);
// console.log(username2);
// console.log(username3);
// console.log(username4);

//Another way to import all the named exports at once is by using the following syntax:
import {username1,username2,username3,username4} from "./app.js";
console.log(username1, username2, username3, username4);