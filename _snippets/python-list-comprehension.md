---
title: "Python List Comprehension"
description: "Examples of Python list comprehension syntax"
date: 2024-05-03
tags: [python, list, comprehension]
language: python
---

# Python List Comprehension

List comprehensions provide a concise way to create lists in Python:

```python
# Basic list comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
print(squares)  # Output: [1, 4, 9, 16, 25]

# List comprehension with condition
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(even_squares)  # Output: [4, 16]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

List comprehensions are more concise and often faster than using traditional for loops to create lists.