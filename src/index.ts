import { flatten } from "q-flat";
import { deep as setDeep, shallow as setShallow } from "q-set";
const parseReg: RegExp = /([^=?&]+)=?([^&]*)/g;

/**
 * Converts an object to a query string and optionally flattens it.
 *
 * @example
 * stringify({ a: 1 }) === 'a=1'
 * stringify({ a: { b: 1 } }, true) === 'a[b]=1'
 */
export function stringify(obj: any, deep?: boolean): string {
  if (deep) {
    obj = flatten(obj);
  }

  const keys: string[] = Object.keys(obj);
  if (!keys.length) {
    return "";
  }

  for (let i = 0, len = keys.length; i < len; i++) {
    const key: string = keys[i];
    keys[i] = encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
  }

  return keys.join("&");
}

/**
 * Parses a query string and optionally unflattens it.
 *
 * @example
 * parse('a=1&b=2&') === "{ a: '1', b: '2' }"
 * parse('a=1&b[c]=2', true) === "{ a: '1', b: { c: '1' } }"
 */
export function parse(str: string, deep?: boolean): any {
  const set = deep ? setDeep : setShallow;
  const result: any = {};

  for (;;) {
    const part = parseReg.exec(str);
    if (!part) {
      break;
    }

    const [, prop, val] = part;
    set(result, decodeURIComponent(prop), decodeURIComponent(val));
  }

  return result;
}
