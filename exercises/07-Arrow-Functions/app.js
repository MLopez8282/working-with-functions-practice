const rapid = str => {
    for(i= 0; i < str.length.toUpperCase(); i++){
        return str.replace(/[aeiou]/gi,'');
    };
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));