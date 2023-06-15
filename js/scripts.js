/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);

function openLiveDemo(event) {
    event.preventDefault();
    // Logic to open the live demo URL
    // Replace the alert with the actual code to open the live demo URL
    alert("Open Live Demo");
}

function openSourceCode(event) {
    event.preventDefault();
    // Logic to open the source code URL
    // Replace the alert with the actual code to open the source code URL
    alert("Open the Source Code");
}

document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.querySelector(".scroll-to-top");
    
    function toggleScrollButton() {
      if (window.scrollY > 100) {
        scrollButton.classList.add("active");
      } else {
        scrollButton.classList.remove("active");
      }
    }
    
    function scrollToTop(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    
    window.addEventListener("scroll", toggleScrollButton);
    scrollButton.addEventListener("click", scrollToTop);
  });
  





  // dowload resume



  document.getElementById('downloadBtn').addEventListener('click', function() {
    var url = 'https://netbook.cs.purdue.edu/Lecture_Notes.pdf'; // Replace with the actual file URL
    
    // Create a hidden anchor element to initiate the download
    var anchor = document.createElement('a');
    anchor.href = url;
    anchor.style.display = 'none';
    anchor.download = url.split('/').pop(); // Set the filename as the last part of the URL
    
    document.body.appendChild(anchor);
    
    // Download progress event
    anchor.addEventListener('progress', function(event) {
      var progress = (event.loaded / event.total) * 100;
      console.log('Downloaded: ' + progress.toFixed(2) + '%');
    });
    
    // Start the download
    anchor.click();
    
    // Cleanup
    document.body.removeChild(anchor);
  });



  // contact form validation 
  
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    let name = document.getElementById('cname').value;
    let email = document.getElementById('cemail').value;
    let message = document.getElementById('cmessage').value;

    // Send form data to the server
    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then(function(response) {
        // Handle the response from the server
        if (response.ok) {
          alert('Message sent successfully!');
          document.getElementById('contactForm').reset(); // Reset the form
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .catch(function(error) {
        // Handle errors
        console.log(error);
        alert('An error occurred. Please try again later.');
      });
  });

     