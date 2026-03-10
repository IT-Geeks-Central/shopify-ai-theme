/* =============================================================
   HYDROLID - Homepage JavaScript
   1. FAQ Accordion
   2. Review Ticker Auto-scroll
   3. Instagram Ticker Auto-scroll
   ============================================================= */

(function () {
  'use strict';

  function initHydroLid() {

    /* ============================================================
       1. FAQ ACCORDION
       Toggle FAQ answers open/closed. One open at a time.
       ============================================================ */
    var faqItems = document.querySelectorAll('.hl-faq-item');

    faqItems.forEach(function (item) {
      var question = item.querySelector('.hl-faq-question');
      if (!question) return;

      question.addEventListener('click', function () {
        faqItems.forEach(function (otherItem) {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        item.classList.toggle('active');
      });
    });


    /* ============================================================
       2. REVIEW TICKER AUTO-SCROLL
       Slowly auto-scrolls review ticker. Pauses on hover.
       ============================================================ */
    var reviewTicker = document.querySelector('.hl-review-ticker');

    if (reviewTicker) {
      var reviewPaused = false;

      reviewTicker.addEventListener('mouseenter', function () { reviewPaused = true; });
      reviewTicker.addEventListener('mouseleave', function () { reviewPaused = false; });

      function scrollReviews() {
        if (!reviewPaused) {
          if (reviewTicker.scrollLeft < reviewTicker.scrollWidth - reviewTicker.clientWidth) {
            reviewTicker.scrollLeft += 0.5;
          } else {
            reviewTicker.scrollLeft = 0;
          }
        }
        requestAnimationFrame(scrollReviews);
      }

      requestAnimationFrame(scrollReviews);
    }


    /* ============================================================
       3. INSTAGRAM TICKER AUTO-SCROLL
       Slowly auto-scrolls the In Use ticker. Pauses on hover.
       ============================================================ */
    var instaTicker = document.querySelector('.hl-insta-ticker');

    if (instaTicker) {
      var instaPaused = false;

      instaTicker.addEventListener('mouseenter', function () { instaPaused = true; });
      instaTicker.addEventListener('mouseleave', function () { instaPaused = false; });

      function scrollInsta() {
        if (!instaPaused) {
          if (instaTicker.scrollLeft < instaTicker.scrollWidth - instaTicker.clientWidth) {
            instaTicker.scrollLeft += 0.5;
          } else {
            instaTicker.scrollLeft = 0;
          }
        }
        requestAnimationFrame(scrollInsta);
      }

      requestAnimationFrame(scrollInsta);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHydroLid);
  } else {
    initHydroLid();
  }

})();
