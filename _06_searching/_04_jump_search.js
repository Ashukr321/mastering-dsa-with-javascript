// 4. Jump Search

/**
 * Pattern Used: Jump Search (Fixed Block-Step Search Space Reduction)
 * Why this pattern: Jumps ahead in fixed-size blocks (typically sqrt(n)) over a
 * sorted array to find the block that could contain the target, then performs
 * a linear scan within that block, giving O(sqrt n) time - a middle ground
 * between linear and binary search when backward jumps are expensive.
 *
 * Interview Scenario:
 * "Useful when discussing search on sorted data stored on media where random
 * access/backtracking is costly (e.g. searching a sorted array on disk or
 * tape): find a target while minimizing the number of costly jumps."
 *
 * Example:
 *   Input:  arr = [1, 3, 5, 7, 9, 11, 13, 15], target = 11, blockSize = sqrt(8) ~ 3
 *   Output: 5 (index of 11, found by jumping in blocks of 3 then scanning linearly)
 */
