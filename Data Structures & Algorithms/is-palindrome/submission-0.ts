class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const normalized: string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        const reversed: string = normalized.split("").reverse().join("");
        return normalized === reversed
    }
}
