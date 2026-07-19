// 19. What are the red black tree

/**
 * Pattern Used: Self-Balancing Tree via Color-Based Invariants (Red-Black Tree)
 * Why this pattern: Maintains approximate balance using coloring rules (root is black, no two consecutive red nodes, equal black-height on every root-to-null path) fixed up with recoloring and rotations, trading strict balance for cheaper rebalancing than AVL.
 *
 * Interview Scenario:
 * "Asked in senior/staff interviews or when discussing language internals (Java TreeMap, Linux CFS scheduler) to test understanding of why red-black trees favor faster insert/delete over AVL's stricter search speed."
 *
 * Example:
 *   Input:  Insert 10(black), 20(red) then 30(red) - two consecutive reds detected under 10
 *   Output: Recolor/rotate fix-up applied so no two consecutive red nodes remain and black-height stays equal on all paths
 */
