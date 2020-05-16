/**
 * Toggle Class
 *
 * @source http://youmightnotneedjquery.com/#toggle_class
 * @param el
 * @param className
 */
export default function toggleClass(el, className, condition) {
  el.classList.toggle(className, condition);
}
