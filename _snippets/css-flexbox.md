---
title: "CSS Flexbox Layout"
description: "A simple flexbox layout example"
date: 2024-05-02
tags: [css, flexbox, layout]
language: css
---

# CSS Flexbox Layout

A simple CSS flexbox layout example:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.item {
  flex: 1 1 300px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
}
```

This CSS creates a flexible container with items that will wrap as needed, with equal spacing between them.