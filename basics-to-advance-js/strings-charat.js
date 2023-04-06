console.log(`Testing Done`);

// < ----------------- Strings.charAt() ------------------- >

const Company = `Devsinc`
console.log(Company.charAt(3));
console.log(Company.charAt(23));
console.log(Company.charAt(-3));
console.log(Company.charAt());

// An integer between 0 and str.length - 1. If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of str is returned.

// If the index you supply is out of this range, JavaScript returns an empty string.

// ----------------  How To Get The Last Character Of The String ---------

console.log(Company.charAt(Company.length - 1));


