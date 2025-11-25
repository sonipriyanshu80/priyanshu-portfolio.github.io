$(document).ready(function () {
  // 🌐 Smooth Scroll on nav-link click
  $('.nav-link').click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    if ($(target).length) {
      $("html, body").animate({ scrollTop: $(target).offset().top - 80 }, 600);
    }
  });

  // 🔅 Active Nav Highlight + Header Toggle + Back-to-Top (Optimized)
  let lastScrollTop = 0;
  const $window = $(window);
  const $document = $(document);
  const $backToTop = $('#backToTop');
  const $header = $('header');

  function onScroll() {
    const scrollPos = $document.scrollTop();

    // Highlight nav
    $(".nav-link").each(function () {
      const $this = $(this);
      const refElement = $($this.attr("href"));
      if (
        refElement.length &&
        refElement.position().top - 100 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav-link").removeClass("active");
        $this.addClass("active");
      }
    });

    // Back-to-top visibility
    if (scrollPos > 100) $backToTop.fadeIn();
    else $backToTop.fadeOut();

    // Header hide/show
    if (scrollPos > lastScrollTop && scrollPos > 100) {
      $header.addClass("hide-header");
    } else {
      $header.removeClass("hide-header");
    }

    lastScrollTop = scrollPos;
  }

  $window.on("scroll", () => {
    requestAnimationFrame(onScroll);
  });

  // ⬆️ Back to Top
  $backToTop.click(() => {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // ✉️ Contact Form AJAX
  $('#contactForm').submit(function (e) {
    e.preventDefault();
    const name = $('input[name="name"]').val().trim();
    const email = $('input[name="email"]').val().trim();
    const message = $('textarea[name="message"]').val().trim();

    if (!name || !email || !message) {
      $('#formMessage').html('<p style="color: red;">❌ Please fill all the fields.</p>');
      return;
    }

    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      success: function () {
        $('#formMessage').html('<p style="color: #4caf50;">✅ Thank you! Message sent successfully.</p>');
        $('#contactForm')[0].reset();
      },
      error: function () {
        $('#formMessage').html('<p style="color: red;">❌ Something went wrong. Try again.</p>');
      }
    });
  });

  // 🕓 Time Greeting
  const hour = new Date().getHours();
  let greeting = "🌇 Good Evening";
  if (hour >= 5 && hour < 12) greeting = "🌅 Good Morning";
  else if (hour >= 12 && hour < 17) greeting = "☀️ Good Afternoon";
  $('#greeting').text(greeting);
});

// 🔄 Preloader + Fade In
$(window).on('load', function () {
  $('#preloader').fadeOut('slow', function () {
    $('body').css('opacity', 1); // Optional smoother reveal
  });
});

// 🖼️ Lazy Load fallback (for older browsers)
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = [].slice.call(document.querySelectorAll("img[loading='lazy']"));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          lazyImageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function (img) {
      lazyImageObserver.observe(img);
    });
  }
});

