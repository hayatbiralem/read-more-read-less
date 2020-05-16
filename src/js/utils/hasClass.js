/**
 * Has Class (IE10+)
 *
 * @source http://youmightnotneedjquery.com/#has_class
 * @param el
 * @param className
 * @returns {boolean}
 */
export default function hasClass(el, className) {
  return el.classList.contains(className);
}
