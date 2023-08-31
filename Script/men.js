import nav from "../Components/nav.js";
document.getElementById("navbar").innerHTML=nav();

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $("header").addClass("fixed")
    }
    else {
      $("header").removeClass("fixed")
    }
  })