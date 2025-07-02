$(document).ready(function () {
  // 🌐 Smooth Scroll on nav-link click
  $('.nav-link').click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 80 }, 700);
  });

  // 🔅 Active Nav Highlight while scrolling
  $(window).on("scroll", function () {
    const scrollPos = $(document).scrollTop();
    $(".nav-link").each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr("href"));
      if (
        refElement.length &&
        refElement.position().top - 100 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav-link").removeClass("active");
        currLink.addClass("active");
      }
    });
  });

  // ⬆️ Back to Top Button click
  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 700);
  });

  // 👆 Show/hide Back-to-Top on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  // ✉️ Contact Form (AJAX using FormSubmit)
  $('#contactForm').submit(function (e) {
    e.preventDefault();

    let name = $('input[name="name"]').val().trim();
    let email = $('input[name="email"]').val().trim();
    let message = $('textarea[name="message"]').val().trim();

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
        $('#formMessage').html('<p style="color: #4caf50;">✅ Thank you! Your message was sent successfully.</p>');
        $('#contactForm')[0].reset();
      },
      error: function () {
        $('#formMessage').html('<p style="color: red;">❌ Something went wrong. Please try again later.</p>');
      }
    });
  });

  // 🕓 Time-Based Greeting (Revised: No Good Night)
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "🌅 Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "☀️ Good Afternoon";
  } else {
    greeting = "🌇 Good Evening";
  }

  $('#greeting').text(greeting);

  // 🔄 Preloader
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow');
  });
});

// 🔻 Hide/Show Header on scroll
let lastScrollTop = 0;
$(window).on("scroll", function () {
  let currentScroll = $(this).scrollTop();

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    $("header").addClass("hide-header");
  } else {
    $("header").removeClass("hide-header");
  }

  lastScrollTop = currentScroll;
});
