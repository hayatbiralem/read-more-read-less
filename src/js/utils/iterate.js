/**
 * Iterate (IE9+)
 *
 * @source http://youmightnotneedjquery.com/#each
 * @param elements
 * @param callback
 */
export default function iterate(elements, callback) {
  Array.prototype.forEach.call(elements, callback);
}
