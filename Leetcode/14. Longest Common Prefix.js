/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 * 
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }


  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      console.log(strs[0][i], strs[j][i], strs[0][i] !== strs[j][i]);
      if (strs[0][i] !== strs[j][i]) {
        // If not, return the string up to and including the previous character
        return strs[0].slice(0, i);
      }
    }

  }


  return strs[0];
};

console.log('longestCommonPrefix', longestCommonPrefix(["flower", "flow", "flight"]));