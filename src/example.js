console.log("Hello");
console.log("Apples");
console.log("This is statement");
console.log("This is also a statement");

function myFunc(name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for(let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
}

myFunc("Adam", "sunny", "one", "two", "three");