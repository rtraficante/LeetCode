class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered_text = re.sub("[^A-Za-z0-9]", "", s)
        filtered_text = filtered_text.lower()

        left = 0
        right = len(filtered_text) - 1
        while left < right:
            if filtered_text[left] != filtered_text[right]:
                return False

            left += 1
            right -= 1

        return True
