$(document).ready(function () {
    $(".menu_a_link ").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
    $(".header_swipeDown_a ").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  
    $("#myForm").submit(function (event) {
      let fullName = $("input[name='fullName']").val();
      var email = $("input[name='email']").val();
  
      if (fullName === "") {
        alert("Please enter your Name and Surname.");
        event.preventDefault();
        return false;
      }
  
      if (email === "") {
        alert("Please enter your Email.");
        event.preventDefault();
        return false;
      }
    });

  });
  
