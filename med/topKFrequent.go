import "sort"

type NumCount struct {
	num   int
	count int
}

func topKFrequent(nums []int, k int) []int {
	counts := make(map[int]int)

	for _, num := range nums {
		if _, ok := counts[num]; ok {
			counts[num]++
		} else {
			counts[num] = 1
		}
	}

	countsArr := []NumCount{}
	for key, val := range counts {
		countsArr = append(countsArr, NumCount{num: key, count: val})
	}

	sort.Slice(countsArr, func(i int, j int) bool {
		return countsArr[i].count > countsArr[j].count
	})

	ret := []int{}
	for i := 0; i < k; i++ {
		ret = append(ret, countsArr[i].num)
	}

	return ret
}
