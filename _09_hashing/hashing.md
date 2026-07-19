# Hashing

## What Is Hashing?

Hashing is the technique of converting a key (a number, string, or object) into
a fixed-size numeric value — a **hash code** — via a **hash function**, and
using that value as an index into a backing array (the **hash table** /
**bucket array**). This gives average-case **O(1)** insert, lookup, and
delete, which is what makes hash-based structures (`Object`, `Map`, `Set` in
JavaScript) the go-to tool for frequency counting, deduplication,
complement/pair lookups, and grouping problems.

A good hash function should:

- Be deterministic (same key always produces the same hash).
- Distribute keys uniformly across buckets to minimize clustering.
- Be fast to compute.

## Collision Handling

A **collision** happens when two different keys hash to the same bucket.
Since the hash space is usually much larger than the table size, collisions
are unavoidable — they are handled with one of these strategies:

- **Chaining**: each bucket holds a list (or small tree) of all entries that
  hashed there; on collision, the new entry is simply appended to that
  bucket's list. Simple and the most common approach in practice.
- **Open Addressing**: on collision, probe for the next available slot in the
  array itself, using:
  - *Linear probing* — check the next slot, then the next, etc.
  - *Quadratic probing* — check slots at increasing quadratic offsets.
  - *Double hashing* — use a second hash function to compute the probe step.

## Load Factor

**Load factor = number of stored entries / number of buckets.**

It measures how "full" the table is and directly affects performance:

- A **low load factor** wastes memory but keeps lookups close to O(1).
- A **high load factor** increases the chance of collisions, degrading
  operations toward O(n) in the worst case (e.g., everything hashing into
  one bucket's chain).
- Hash table implementations typically **resize (rehash)** — allocate a
  bigger backing array and redistribute all entries — once the load factor
  crosses a threshold (commonly ~0.75), to keep operations close to O(1)
  amortized.

## Why Hashing Shows Up So Often In Interviews

Hashing trades extra space for speed: by remembering what you've already
seen (a value, a count, a prefix sum, an index), you can collapse an
O(n^2) brute-force comparison into a single O(n) pass. That's the core idea
behind nearly every problem in this folder — Two Sum, duplicate detection,
frequency maps, anagram grouping, prefix-sum subarray counting, and
consecutive-sequence detection all boil down to "store what you've seen in a
hash structure, then look it up in O(1)."
