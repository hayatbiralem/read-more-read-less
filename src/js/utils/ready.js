/**
 * Ready (IE9+)
 *
 * @source http://youmightnotneedjquery.com/#ready
 * @param fn
 */

export default function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
