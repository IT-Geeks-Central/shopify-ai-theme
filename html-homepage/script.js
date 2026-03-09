/* ============================================================
   HYDROLID - Main JavaScript
   Sections:
   1. FAQ Accordion
   2. Review Ticker Auto-scroll
   3. Instagram Ticker Auto-scroll
   ============================================================ */


/* ============================================================
   1. FAQ ACCORDION
   Toggle FAQ answers open/closed on question click.
   Only one FAQ can be open at a time.
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
      // Close other open items
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });


  /* ============================================================
     2. REVIEW TICKER AUTO-SCROLL
     Slowly auto-scrolls the review ticker horizontally.
     Pauses on hover.
     ============================================================ */
  const reviewTicker = document.querySelector('.review-ticker');

  if (reviewTicker) {
    let reviewScrollSpeed = 0.5;
    let reviewPaused = false;

    reviewTicker.addEventListener('mouseenter', function () {
      reviewPaused = true;
    });

    reviewTicker.addEventListener('mouseleave', function () {
      reviewPaused = false;
    });

    function scrollReviews() {
      if (!reviewPaused && reviewTicker.scrollLeft < reviewTicker.scrollWidth - reviewTicker.clientWidth) {
        reviewTicker.scrollLeft += reviewScrollSpeed;
      } else if (!reviewPaused) {
        reviewTicker.scrollLeft = 0;
      }
      requestAnimationFrame(scrollReviews);
    }

    requestAnimationFrame(scrollReviews);
  }


  /* ============================================================
     3. INSTAGRAM TICKER AUTO-SCROLL
     Slowly auto-scrolls the Instagram/In Use ticker.
     Pauses on hover.
     ============================================================ */
  const instaTicker = document.querySelector('.insta-ticker');

  if (instaTicker) {
    let instaScrollSpeed = 0.5;
    let instaPaused = false;

    instaTicker.addEventListener('mouseenter', function () {
      instaPaused = true;
    });

    instaTicker.addEventListener('mouseleave', function () {
      instaPaused = false;
    });

    function scrollInsta() {
      if (!instaPaused && instaTicker.scrollLeft < instaTicker.scrollWidth - instaTicker.clientWidth) {
        instaTicker.scrollLeft += instaScrollSpeed;
      } else if (!instaPaused) {
        instaTicker.scrollLeft = 0;
      }
      requestAnimationFrame(scrollInsta);
    }

    requestAnimationFrame(scrollInsta);
  }

});
