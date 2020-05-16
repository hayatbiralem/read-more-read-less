import iterate from './iterate';

/**
 * Each (IE9+)
 *
 * @source http://youmightnotneedjquery.com/#each
 * @param selector
 * @param callback
 */
export default function each(selector, callback) {
  let elements = document.querySelectorAll(selector);
  iterate(elements, callback);
}
