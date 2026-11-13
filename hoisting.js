/////////////////// HOISTING ////////////////////////
 
 console.log(a);
 greet();
 console.log(b);

 //let  a = 10;
 var a = 10;
 //a ki value ni hai to initilizable nahi hoga
 //LET and CONST are hoisting but not accesible before initialization
 //they will remain in Temporal Dead Zone(TDZ) until they are initialized

function greet(){
    console.log("Hello");
}

// only function declaration will be hoisted
//func Expression and Arrow function will be treated as variable 

var b = function () {
    console.log("b");
 }
