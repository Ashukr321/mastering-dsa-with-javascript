// 5. Check if a Specific Bit at a Given Position is Set or Unset

/**
 * Pattern Used: Bit Masking (Positional Bit Test)
 * Why this pattern: Left-shifting 1 to the target position creates a mask with only that bit turned on, and
 * AND-ing it with the number isolates that single bit so its on/off state can be read directly.
 *
 * Interview Scenario:
 * "Comes up when working with bit flags, permission masks, or parsing binary protocols (e.g. LeetCode 393's
 * byte-boundary checks): given a number and a bit position, determine whether that bit is 1 (set) or 0 (unset)."
 *
 * Example:
 *   Input:  n = 10 (binary: 1010), position = 1
 *   Output: true (bit at position 1 is set)
 */
