// console.log("Hello");
// console.log("Apples");
// console.log("This is statement");
// console.log("This is also a statement");

// function messageFunction(name, weather) {
//     let message = "Hello, Adam";
//     if(weather === "sunny") {
//         let message = "It is a nice day";
//         console.log(message);
//     } else {
//         let message = "It is " + weather + " today";
//         console.log(message);
//     }
//     console.log(message);
// }

// messageFunction("Adam", "raining");

function sumValues(values) {
    return values.reduce((total, val) => total + val, 0);
}

function sumOdd(values) {
    return sumValues(values.filter((item, index) => index % 2 === 0));
}

function asyncAdd(values) {
    return new Promise(callback =>
    setTimeout(() => {
        let total = sumValues(values);
        console.log(`Async Total: ${total}`);
        callback(total);
    }, 500));
}

let values = [10, 20, 30, 40, 50];
//asyncAdd(values).then(total => console.log(`Main Total ${total}`));

async function doTask() {
    let total = await asyncAdd(values);
    console.log(`Main Total: ${total}`);
}

doTask();