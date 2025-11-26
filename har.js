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
