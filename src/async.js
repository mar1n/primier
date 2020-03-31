import { sumValues } from "./sum";

function sumValues(values) {
    return values.reduce((total, val) => total + val, 0);
}

function sumOdd(values) {
    return sumValues(values.filter((item, index) => index % 2 === 0));
}

function asyncAdd(values) {
    setTimeout(() => {
        let total = sumValues(values);
        console.log(`Async Total: ${total}`);
        return total;
    }, 500);
}