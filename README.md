# Longest-Harmonious-Subsequence-LHS-problem.
✅ Approach

A harmonious subsequence requires:

max - min = 1


So if the subsequence contains value x, it must also contain x+1.

We only need frequencies:

Count occurrences of each number.

For each number x, if x+1 exists,
the harmonious subsequence length is:

freq[x] + freq[x+1]


Take the maximum over all possible pairs.

✅ Time Complexity
O(n)

✅ Space Complexity
O(n)

⭐ JavaScript Solution
var findLHS = function(nums) {
    const freq = new Map();

    // count frequency
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let longest = 0;

    // check pairs num and num+1
    for (let [num, count] of freq) {
        if (freq.has(num + 1)) {
            longest = Math.max(longest, count + freq.get(num + 1));
        }
    }

    return longest;
};

✅ Example Walkthrough
Input:
nums = [1,3,2,2,5,2,3,7]


Frequencies:

1 → 1
2 → 3
3 → 2
5 → 1
7 → 1


Valid pairs:

(2,3) → 3 + 2 = 5

Output:

5
