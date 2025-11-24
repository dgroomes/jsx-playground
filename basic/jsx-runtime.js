/** @jsx myCreateElement */
/** @jsxFrag Fragment */

// Tiny JSX runtime: factory + renderer. This is a toy; real apps should use mature renderers instead of hand-rolled
// string concatenation to produce HTML.
export const Fragment = Symbol('Fragment');

/**
 * A tiny JSX factory that mirrors React's `createElement` signature. JSX transpiles into calls to this function.
 * The name is arbitrary ("myCreateElement") to make it clear you can supply any factory (and to avoid collisions).
 */
export function myCreateElement(type, props, ...children) {
  return { type, props: props ?? {}, children };
}

/**
 * Render the element tree into an HTML string. In React terms this is akin to `renderToString`, but intentionally
 * minimal and naive (string concatenation, no escaping).
 */
export function myRender(node) {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(myRender).join('');
  if (!node || typeof node !== 'object') return '';

  const safeChildren = (node.children ?? []).filter(
    (child) => child !== null && child !== undefined && child !== false && child !== true
  );

  const renderedChildren = safeChildren.map(myRender).join(''); // naive; real renderers escape and stream

  if (node.type === Fragment) return renderedChildren;

  const attrs = Object.entries(node.props ?? {})
    .map(([key, value]) => ` ${key}="${value}"`)
    .join('');

  return `<${node.type}${attrs}>${renderedChildren}</${node.type}>`;
}
