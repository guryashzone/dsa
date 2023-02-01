// 67. Add Binary;
// Easy;
// 6.7K;
// 695;
// Companies
// Given two binary strings a and b, return their sum as a binary string.



//   Example 1:

// Input: a = "11", b = "1";
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011";
// Output: "10101";


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};