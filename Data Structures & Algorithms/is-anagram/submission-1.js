class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = {};

        if(s.length !== t.length) return false;

        for(let char of s){
            count[char] = (count[char] || 0) + 1;
        }

        for(let char of t){
            count[char] = (count[char] || 0) - 1;
        }

        for (let char in count){
            if(count[char] !== 0) return false;
        }
    return true;
    }
}
