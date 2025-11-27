# jsx-playground

📚 Learning and exploring JSX.


## Overview

JSX is a general-purpose syntax for describing trees. It is often used with React, but JSX is not coupled to React and
can be rendered by any function that understands how to turn a tree into something useful. This repository is my space
for exploring JSX as its own idea, with an emphasis on first principles and approachable, runnable examples (including
non-React runtimes).

**NOTE**: This project was developed on macOS. It is for my own personal use.


## Standalone subprojects

This repository illustrates different concepts, patterns and examples via standalone subprojects. Each subproject is
completely independent of the others and do not depend on the root project. This _standalone subproject constraint_
forces the subprojects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The subprojects include:


## `basic/`

Render HTML from JSX with a tiny runtime.

See the README in [basic/](basic/).


## `markdown-gen/`

Generate Markdown from JSX using a custom Markdown-aware renderer.

See the README in [markdown-gen/](markdown-gen/).


## Wish List

General clean-ups, todos and things I wish to implement for this project:

- [ ] PARTIAL Scaffold and `basic/` subproject.
- [x] DONE Incorporate the Markdown-from-JSX subproject currently living in `react-playground/static-markdown-gen`
