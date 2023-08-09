func groupAnagrams(strs []string) [][]string {
    anagrams := make(map[string][]string)

    for _, str := range strs {
        sortedString := sortString(str)
        _, exists := anagrams[sortedString]

        if (exists) {
            anagrams[sortedString] = append(anagrams[sortedString], str)
        } else {
            anagrams[sortedString] = []string{str}
        }
    }

    res := [][]string{}
    for _, val := range anagrams {
        res = append(res, val)
    }
    return res
}

func sortString(str string) string {
    chars := []rune(str)
    sort.Slice(chars, func(i int, j int) bool {
        return chars[i] < chars[j];
    })
    return string(chars)
}
