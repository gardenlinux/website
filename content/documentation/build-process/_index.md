---
title: Build Process
weight: 20
chapter: false
disableToc: true
---

Everything is automated!

{{<mermaid align="left">}}
graph LR;
    A[New Patch] --> B(SCM commit)
    B --> C{Works?}
    C -->|Yes| D[Build & Release]
    C -->|No| E[Discard]
{{< /mermaid >}}

