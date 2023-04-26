console.log(`Checking Files`);

// < -------------- Number.EPSILON ------------ >

// console.log(Number.EPSILON);
// console.log(2.220446049250313e-16 == Number.EPSILON);

function equal(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
  }
  
  const x = 0.2;
  const y = 0.3;
  const z = 0.1;
//   console.log(equal(x + z, y)); // true
  
// < ------------------- Number.MAX_SAFE_INTEGER --------------- >

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER + 1);
// console.log(Number.MAX_SAFE_INTEGER + 2);
// console.log(Number.MAX_SAFE_INTEGER + 3);
// console.log(Number.MAX_SAFE_INTEGER + 4);
// console.log(Number.MAX_SAFE_INTEGER + 5);
// console.log(Number.MAX_SAFE_INTEGER + 6);

// < ----------------- Number.MAX_VALUE ------------- >

// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE * Number.MAX_SAFE_INTEGER);

// < ----------------- Number.MIN_SAFE_INTEGER ---------------- >

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER - 1);

// < --------------- Number.MIN_VALUE -------------------- >

// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_VALUE - Number.MIN_VALUE);

// < ---------------- Number.NaN -------------------- >

// console.log(Number.NaN);
// console.log(Number.NaN);

// < ----------------- Number.NEGATIVE_INFINITY --------------- >

// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);