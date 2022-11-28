console.log(module.exports);
console.log(exports);

console.log(module.exports === exports);

// exports 与 module.exports 指向的对象是同一个
// 但是最终共享的结果，永远都是 module.exports 所指向的对象