// 20. What are the b tree and b+ tree and its applications

/**
 * Pattern Used: Multiway Search Tree (B-Tree / B+ Tree, Disk-Oriented Balancing)
 * Why this pattern: Generalizes BST balancing to nodes holding many keys/children (order m) so tree height stays extremely small even for huge datasets, minimizing disk/page reads which is the real bottleneck for on-disk indexes.
 *
 * Interview Scenario:
 * "Common systems-design-adjacent question: 'why do databases and filesystems use B/B+ trees instead of AVL or red-black trees for their indexes?' - tests understanding of I/O cost versus in-memory comparison cost."
 *
 * Example:
 *   Input:  A B-tree of order 4 (max 3 keys per node) storing keys [10,20,30,40,50]
 *   Output: Root splits to hold [30] with children [10,20] and [40,50], keeping tree height at 2 instead of a tall binary chain
 */
