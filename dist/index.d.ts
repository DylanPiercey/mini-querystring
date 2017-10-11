/**
 * Converts an object to a query string and optionally flattens it.
 *
 * @example
 * stringify({ a: 1 }) === 'a=1'
 * stringify({ a: { b: 1 } }, true) === 'a[b]=1'
 */
export declare function stringify(obj: any, deep?: boolean): string;
/**
 * Parses a query string and optionally unflattens it.
 *
 * @example
 * parse('a=1&b=2&') === "{ a: '1', b: '2' }"
 * parse('a=1&b[c]=2', true) === "{ a: '1', b: { c: '1' } }"
 */
export declare function parse(str: string, deep?: boolean): any;
