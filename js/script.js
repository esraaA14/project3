
const loginBtn = document.querySelector('.custom-login-btn');

    // اختيار الـ modal
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));

    // إضافة الحدث لزر login لفتح الـ modal
    loginBtn.addEventListener('click', function() {
      loginModal.show();
    });
    // //////////////////////////////////////////
    function copyText(textareaId, messageId) {
      var textarea = document.getElementById(textareaId);
      textarea.select();
      textarea.setSelectionRange(0, 99999); // تأكيد النسخ في جميع المتصفحات
      document.execCommand("copy");

      var copiedMessage = document.getElementById(messageId);
      copiedMessage.style.display = "inline"; 

      setTimeout(function() {
          copiedMessage.style.display = "none";
      }, 1000);

     
      setTimeout(function() {
          alert("تم نسخ النص");
      }, 100); 
  }
    ////////////////////
    document.addEventListener("scroll", function() {
        const podcastCards = document.querySelectorAll(".podcast-card");
        const visibilityThreshold = 0.5;
      
        podcastCards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const image = card.querySelector(".podcast-image, .podcast-image1");
          const underline = card.querySelector(".underline");
      
          const visibleRatio = (Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top)) / rect.height;
      
          if (visibleRatio >= visibilityThreshold) {
            if (image) {
              if (image.classList.contains("podcast-image")) {
                image.classList.add("zoom-image");
              } else if (image.classList.contains("podcast-image1")) {
                image.classList.add("zoom-image1");
              }
            }
            if (underline) {
              underline.classList.add("zoom-underline");
            }
          } else {
            if (image) {
              image.classList.remove("zoom-image", "zoom-image1");
            }
            if (underline) {
              underline.classList.remove("zoom-underline");
            }
          }
        });
      });
      


      
     
