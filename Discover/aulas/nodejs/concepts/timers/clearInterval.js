const timeOut = 500;
const checking = () => console.log("checking!");

let interval = setInterval(checking, timeOut);

setTimeout(() => clearInterval(interval), 3000);
