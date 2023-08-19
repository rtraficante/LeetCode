class Solution:
    def isValid(self, s: str) -> bool:
        opposites = {")": "(", "}": "{", "]": "["}
        stack = []

        for n in s:
            if n not in opposites:
                stack.append(n)
                continue
            if not stack or stack[-1] != opposites[n]:
                return False
            stack.pop()

        return len(stack) == 0
