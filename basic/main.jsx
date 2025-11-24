/** @jsx myCreateElement */
/** @jsxFrag Fragment */

// Use classic JSX pragmas so TypeScript's compiler emits calls to our custom factory instead of React.
import { myCreateElement, Fragment, myRender } from './jsx-runtime.js';

const snacks = ['grapes', 'cheese', 'olives'];

const documentTree = (
  <>
    <section data-purpose="demo">
      <h1>Render HTML from JSX</h1>
      <p>JSX is syntax for function calls. This renderer turns the tree into an HTML string.</p>
      <ul>
        <li>Factory function: createElement</li>
        <li>Fragment symbol: Fragment</li>
        <li>Renderer: render</li>
      </ul>
    </section>
    <section data-purpose="dynamic">
      <h2>Data-driven JSX</h2>
      <p>Mapping and conditionals are just JavaScript.</p>
      {snacks.length === 0 ? (
        <p>No snacks available.</p>
      ) : (
        <ul>
          {snacks.map((snack) => (
            <li>{snack}</li>
          ))}
        </ul>
      )}
    </section>
  </>
);

console.log(myRender(documentTree));
