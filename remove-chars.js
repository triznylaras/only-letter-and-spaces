let message = "0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_";
let onlyLettersAndSpace = message.replace(/[^\sa-zA-Z]/gm,"");
console.log(onlyLettersAndSpace)