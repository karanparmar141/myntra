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


const ui=(data)=>{
    console.log(data)
    data.map((prodcut)=>{
        p+=1
        console.log(prodcut.rating)
  
        let cardimg=document.createElement("div")
        cardimg.innerHTML=`
        <div id="slider${p}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${prodcut.img1}" class="card-img-top poition-relative" alt="1...">
                          </div>
                          <div class="carousel-item">
                            <img src="${prodcut.img2}" class="card-img-top poition-relative" alt="2...">
                          </div>
                          <div class="carousel-item">
                            <img src="${prodcut.img3}" class="card-img-top poition-relative" alt="3...">
                          </div>
                          <div class="carousel-item">
                            <img src="${prodcut.img4}" class="card-img-top poition-relative" alt="3...">
                          </div>
                          <div class="carousel-item">
                            <img src="${prodcut.img5}" class="card-img-top poition-relative" alt="3...">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#slider1" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#slider1" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
        `
        let cardtitle=document.createElement("h5")
        cardtitle.classList.add("fw-bold","text-uppercase","m-0")
        cardtitle.innerHTML=prodcut.prodcuts_name
  
        let cardcat=document.createElement("p")
        cardcat.classList.add("fw-bold","text-uppercase","m-0")
        cardcat.innerHTML=prodcut.prodcuts_catagary
        // let rate=document.createElement("p")
        // rate.classList.add("fw-semibold")
        // rate.innerHTML=`<i class="bi bi-star-fill"></i>  ${prodcut.rating.rate}`
        // if(prodcut.rating.rate >4){
        //     rate.classList.add("text-primary")
        // }
        // else if(prodcut.rating.rate>3){
        //     rate.classList.add("text-success")
        // }
        // else if(prodcut.rating.rate>2){
        //     rate.classList.add("text-warning")
        // } 
        // else{
        //     rate.classList.add("text-danger")
        // }
        let card=document.createElement("div")
        card.classList.add("card","border-0","shadow","text-center")
        card.append(cardimg,cardtitle,cardcat)
        let div=document.createElement("div")
        div.classList.add("col-md-3","col-6","my-2")
        div.append(card)
  
  
        document.getElementById("pro").append(div)
    })
  }
  
  
  
  const womenpro=(prodcuts)=>{
    window.location.href="prodcuts.html"
    console.log(prodcuts)
    fetch(`http://localhost:3000/prodcuts?brand=${prodcuts}`)
    .then((res)=>res.json())
    .then((data)=>{
      ui(data)
    })
  }
  
  
    document.getElementById("biba").addEventListener("click",()=>womenpro("biba")),
    document.getElementById("biba").addEventListener("click",()=>womenpro("biba"))