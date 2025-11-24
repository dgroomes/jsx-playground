# basic

Render HTML from JSX with a tiny runtime.


## Overview

This subproject uses a tiny custom JSX factory (`myCreateElement`) and renderer (`myRender`) to show JSX in isolation.
The program builds a JSX tree—with mapping and conditional rendering—and renders it into an HTML string so we can see
how JSX syntax lowers to plain function calls (no React needed). The runtime lives in `jsx-runtime.js`; `main.jsx` uses
it. This is a toy renderer that concatenates strings—use a real HTML renderer for production work. The function names are
purposefully arbitrary (to avoid collisions) and echo React's APIs to make the parallel obvious.

The source is plain JavaScript (`main.jsx`). I use the TypeScript compiler (`tsc`) only to transpile the JSX syntax to
JavaScript; this is not a TypeScript tutorial. I like how this highlights that JSX needs a tool like TSC or Babel to
become runnable JavaScript. (todo: revisit this wording for brevity)


## Instructions

Follow these instructions to run the program:

1. Pre-requisite: Node.js
   * I used version 23.7.0
2. Install dependencies
   * ```shell
     npm install
     ```
3. Build and run the program
   * ```shell
     npm start
     ```
   * The program generates `output.html`
4. Open the HTML file in your browser
   * ```shell
     open output.html
     ```
   * Or open it manually in your preferred browser


## Wish List

General clean-ups, todos and things I wish to implement for this project:

- [x] DONE Create project
   - DONE Scaffold/vision (GPT 5.1 codex max). But it doesn't actually work!
   - DONE Fix (Sonnet 4.5)
- [ ] AI slop clean up (although the content is really close)
   - Rewrite some of the prose.
   - package.json no scripts
   - Can shrink even closer to first principles?
   - I think I'll keep npm/tsc because it's universal, but for the next subproject I'll use Bun
