/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */


 func inorderTraversal(root *TreeNode) []int {
	var left []int
	var right []int

	if root == nil {
			return []int{}
	}

	left = inorderTraversal(root.Left)
	right = inorderTraversal(root.Right)

	tempLeft := append(left, root.Val)
	res := append(tempLeft, right...)

	return res
}
