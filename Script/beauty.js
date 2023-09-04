import nav from "../Components/nav.js";
document.getElementById("navbar").innerHTML=nav();

import foot from "../Components/footer.js";
document.getElementById("footer").innerHTML=foot();


const menpro=()=>{
    setTimeout(
      window.location.href="prodcuts.html"
      , 2000);
  }
    document.getElementById("img").addEventListener("click",menpro)