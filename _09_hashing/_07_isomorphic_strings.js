// 7. Check If Two Strings Are Isomorphic

/**
 * Pattern Used: Hashing / Two-Way Character Mapping
 * Why this pattern: Maintaining two hash maps - one from each character of
 * the first string to the corresponding character of the second, and vice
 * versa - lets you verify a consistent one-to-one character substitution in
 * a single O(n) pass.
 *
 * Interview Scenario:
 * "Given two strings, determine if the characters of one can be consistently
 * replaced to obtain the other (e.g. validating that an encoding scheme maps
 * each letter to exactly one substitute)."
 *
 * Example:
 *   Input:  s = "egg", t = "add"
 *   Output: true (e->a, g->d, consistent both ways)
 */
