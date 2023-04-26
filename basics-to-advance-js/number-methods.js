console.log(`Checking File`);

// < -------------- Numbers.toString() --------------- >
const str1 = `125`
// console.log(str1);
// console.log(typeof str1);

let numCheck = Number(str1);
// console.log(numCheck);
// console.log(typeof numCheck);

let numToStr = 12354;
// console.log(numToStr);
// console.log(typeof(numToStr.toString()));
// console.log(typeof numToStr)

const num1 = 8;
// console.log(num1.toString(16));

// < ------------------- Number.toExponential() ----------------- >

const str2 = 564;
// console.log(str2.toExponential(2));

const str3 = 65.678798;
// console.log(str3.toExponential());
// console.log(str3.toExponential(2));
// console.log(str3.toExponential(3));
// console.log(str3.toExponential(4));
// console.log(str3.toExponential(5));

// < ------------- Number.toFixed() ---------------- >

const num = 12.2734;
// console.log(num.toFixed());
// console.log(num.toFixed(2));

// < ------------- Number.valueOf() ------------------ >

const strNum = new Number(12.342);
// console.log(typeof strNum);
// console.log(strNum.valueOf().toFixed());
// console.log(strNum.valueOf());

// < -------------- Number.toPrecision() --------------- >

const numStr = 123.2143;
// console.log(numStr.toPrecision(3));
// console.log(numStr.toPrecision(1));
// console.log(numStr.toPrecision(4));
// console.log(numStr.toPrecision(2));

const numStr3 = 0.0042;
// console.log(numStr3.toPrecision(1)); 

// < ------------ Number.toLocaleString ----------------- >

const numStr2 = 123;

// console.log(numStr2.toLocaleString(`ar-EG`));

// < ------------- Number.parseInt() ---------------- >

// console.log(Number.parseInt(124.76));

// < ------------- Number.parseFloat() ---------------- >

// console.log(Number.parseFloat(123.321));

// < --------------- Number.isSafeInteger() -------------- >

// console.log(Number.isSafeInteger(123));
// console.log(Number.isSafeInteger(123 ** 321));

// < ------------- Number.isNan() ---------------- >

// console.log(Number.isNaN(Number(746283)));
// console.log(Number.isNaN(`hf`));
// console.log(Number.isNaN("NaN"));
// console.log(isNaN("Blabala"));
// console.log(isNaN("8763247"));

// < ------------ Number.isInteger() ----------------- >

// console.log(Number.isInteger(132));
// console.log(Number.isInteger(`fsdsdf`));
// console.log(Number.isInteger(3123.142));

function fit(x, y) {
    if (Number.isInteger(x / y)) {
        return `Fits`
    }else{
        return `Not Fitted`
    }
}

// console.log(fit(8, 4));
// console.log(fit(2, 4));

// < -------------- Number.isFinite() ------------- >

// console.log(Number.isFinite(123));
// console.log(Number.isFinite(2/2));
// console.log(Number.isFinite(2/0));
// console.log(Number.isFinite(0/0));
// console.log(Number.isFinite(Infinity));

