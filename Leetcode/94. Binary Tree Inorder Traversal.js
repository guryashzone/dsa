// 94. Binary Tree Inorder Traversal;
// Easy;
// 10.8K;
// 523;
// Companies
// Given the root of a binary tree, return the inorder traversal of its nodes' values.



// Example 1:


// Input: root = [1, null, 2, 3];
// Output: [1, 3, 2]
// Example 2:

// Input: root = [];
// Output: []
// Example 3:

// Input: root = [1];
// Output: [1];


// Constraints:

// The number of nodes in the tree is in the range[0, 100].
// - 100 <= Node.val <= 100


// Follow up: Recursive solution is trivial, could you do it iteratively ?;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (root == null) return [];
  const inorder = [];
  const stack = [];
  let curr = root;
  while (true) {
    if (curr != null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      if (stack.length == 0) break;
      curr = stack.pop();
      inorder.push(curr.val);
      curr = curr.right;
    }
  }

  return inorder;
};