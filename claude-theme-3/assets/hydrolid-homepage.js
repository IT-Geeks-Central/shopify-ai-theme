/* ============================================================
   HYDROLID HOMEPAGE — Main JavaScript
   Sections:
   1. FAQ Accordion
   2. Review Ticker Auto-scroll
   3. Instagram / In-Use Ticker Auto-scroll
   ============================================================ */

(function () {
  'use strict';

  function initHydrolidHomepage() {

    /* ============================================================
       1. FAQ ACCORDION
       Toggle FAQ answers open/closed on question click.
       Only one FAQ can be open at a time.
       ============================================================ */
    var faqItems = document.querySelectorAll('.hl-faq-item');

    faqItems.forEach(function (item) {
      var question = item.querySelector('.hl-faq-question');
      if (!question) return;

      question.addEventListener('click', function () {
        // Close other open items
        faqItems.forEach(function (otherItem) {
          if (otherItem !== item && otherItem.classList.contains('hl-active')) {
            otherItem.classList.remove('hl-active');
          }
        });

        // Toggle current item
        item.classList.toggle('hl-active');
      });
    });


    /* ============================================================
       2. REVIEW TICKER AUTO-SCROLL
       Slowly auto-scrolls the review ticker horizontally.
       Pauses on hover.
       ============================================================ */
    var reviewTicker = document.querySelector('.hl-review-ticker');

    if (reviewTicker) {
      var reviewScrollSpeed = 0.5;
      var reviewPaused = false;

      reviewTicker.addEventListener('mouseenter', function () {
        reviewPaused = true;
      });

      reviewTicker.addEventListener('mouseleave', function () {
        reviewPaused = false;
      });

      function scrollReviews() {
        if (!reviewPaused) {
          if (reviewTicker.scrollLeft < reviewTicker.scrollWidth - reviewTicker.clientWidth) {
            reviewTicker.scrollLeft += reviewScrollSpeed;
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
       Slowly auto-scrolls the In Use / Instagram ticker.
       Pauses on hover.
       ============================================================ */
    var instaTicker = document.querySelector('.hl-insta-ticker');

    if (instaTicker) {
      var instaScrollSpeed = 0.5;
      var instaPaused = false;

      instaTicker.addEventListener('mouseenter', function () {
        instaPaused = true;
      });

      instaTicker.addEventListener('mouseleave', function () {
        instaPaused = false;
      });

      function scrollInsta() {
        if (!instaPaused) {
          if (instaTicker.scrollLeft < instaTicker.scrollWidth - instaTicker.clientWidth) {
            instaTicker.scrollLeft += instaScrollSpeed;
          } else {
            instaTicker.scrollLeft = 0;
          }
        }
        requestAnimationFrame(scrollInsta);
      }

      requestAnimationFrame(scrollInsta);
    }

  }

  // Initialize after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHydrolidHomepage);
  } else {
    initHydrolidHomepage();
  }

})();
