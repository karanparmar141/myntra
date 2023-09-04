import nav from "../Components/nav.js";
document.getElementById("navbar").innerHTML=nav();


import foot from "../Components/footer.js";
document.getElementById("footer").innerHTML=foot();


// $(window).scroll(function () {
//     if ($(window).scrollTop() > 500) {
//       $("header").addClass("fixed")
//     }
//     else {
//       $("header").removeClass("fixed")
//     }
//   })

let p=0


const menpro=(prodcuts)=>{
  setTimeout(
    window.location.href="prodcuts.html"
    , 2000);
}
  document.getElementById("img").addEventListener("click",()=>menpro("gant"))
