/**20. Valid Parentheses;
Easy;
17.6K;
965;
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


  Example 1:

Input: s = "()";
Output: true
Example 2:

Input: s = "()[]{}";
Output: true
Example 3:

Input: s = "(]";
Output: false;


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
  Accepted;
3M;
**/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const len = s.length;

  if (len % 2 === 1) return false;

  if (Object.keys(pairs).includes(s[0])) return false;

  if (Object.values(pairs).includes(s[len - 1])) return false;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (Object.values(pairs).includes(s[i])) {
      stack.push(s[i]);
    } else if (stack.pop() !== pairs[s[i]]) {
      return false;
    }
  }

  return stack.length === 0;
};