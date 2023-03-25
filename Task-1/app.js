import getUsers from "./getUsers.js";

const input = process.argv[2];

console.log(await getUsers(1));
