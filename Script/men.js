import nav from "../Components/nav.js";
document.getElementById("navbar").innerHTML=nav();

// $(window).scroll(function () {
//     if ($(window).scrollTop() > 500) {
//       $("header").addClass("fixed")
//     }
//     else {
//       $("header").removeClass("fixed")
//     }
//   })




const gant=(prodcuts)=>{
  window.location.href="prodcuts.html"
  console.log(prodcuts)
  fetch(`http://localhost:3000/prodcuts?prodcuts_catagary=${prodcuts}`)
}


  // document.getElementById("gant").addEventListener("click",gant)