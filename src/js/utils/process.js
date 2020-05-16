import each from './each';
import addClass from './addClass';
import hasClass from './hasClass';
import toggleClass from './toggleClass';

/**
 * Process
 */

export default function process() {

  each('.o-read-more-read-less__toggle', function (el) {

    // check
    if (el.getAttribute('data-processed') !== '1') {
      el.setAttribute('data-processed', '1');

      addClass(el.parentNode, 'o-read-more-read-less');

      // cache vars
      let moreText = el.getAttribute('data-more') || 'Read more';
      let lessText = el.getAttribute('data-less') || 'Read less';

      // Create content wrapper for next siblings
      let content = document.createElement("span");
      content.setAttribute('class', 'o-read-more-read-less__content');

      while (el.nextSibling) {
        content.appendChild(el.nextSibling);
      }

      el.parentNode.insertBefore(content, el);

      // insert single space before toggle element
      el.parentNode.insertBefore(document.createTextNode(" "), el);

      el.innerHTML = moreText;
      el.addEventListener('click', function (e) {
        e.preventDefault();
        let isExpanded = hasClass(el.parentNode, 'is-expanded');
        toggleClass(el.parentNode, 'is-expanded', !isExpanded);
        el.innerHTML = isExpanded ? moreText : lessText;
      });
    }
  });

}
