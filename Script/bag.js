let p=0

const ui = (data) => {

  document.getElementById("bag").innerHTML=``
  data.map((prodcut) => {
    p += 1

    let cardimg = document.createElement("div")
    cardimg.classList.add("col-3")
    cardimg.innerHTML = `
        <div id="slider${p}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${prodcut.img1}" data-bs-toggle="modal" data-bs-target="#p${p}" class="card-img-top poition-relative" alt="1...">
                          </div>
                          <div class="carousel-item">
                            <img src="${prodcut.img2}" data-bs-toggle="modal" data-bs-target="#p${p}" class="card-img-top poition-relative" alt="2...">
                          </div>
                          <div class="carousel-item">
                            <img src="${prodcut.img3}" data-bs-toggle="modal" data-bs-target="#p${p}" class="card-img-top poition-relative" alt="3...">
                          </div>
                          <div class="carousel-item">
                            <img src="${prodcut.img4}" class="card-img-top poition-relative" alt="3...">
                          </div>
                          <div class="carousel-item">
                            <img src="${prodcut.img5}" class="card-img-top poition-relative" alt="3...">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#slider${p}" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#slider${p}" data-bs-slide="next">
                          <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="modal fade modal-fullscreen-xxl-down" id="p${p}" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true" data-bs-backdrop="static">
                            <div class="modal-dialog modal-dialog-top ">
                                <div class="modal-content border-0">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close " data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class=" row">
                                            <div id="slider${p}" class="carousel slide col-3" data-bs-ride="carousel">
                                              <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                  <img src="${prodcut.img1}" class="card-img-top poition-relative" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                  <img src="${prodcut.img2}" class="card-img-top poition-relative" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                  <img src="${prodcut.img3}" class="card-img-top poition-relative" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                  <img src="${prodcut.img4}" class="card-img-top poition-relative" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                  <img src="${prodcut.img5}" class="card-img-top poition-relative" alt="...">
                                                </div>
                                              </div>
                                              <button class="carousel-control-prev" type="button" data-bs-target="#slider${p}" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                              </button>
                                              <button class="carousel-control-next" type="button" data-bs-target="#slider${p}" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                              </button>
                                            </div>
                                            <div class="col-8">
                                              <p class="card-text text-uppercase fs-5 m-0 fw-bold">${prodcut.prodcuts_name}</p>
                                              <p class="card-text text-uppercase fs-6 text-muted m-0 fw-bold">${prodcut.prodcuts_deatil}</p>
                                              <div class="d-flex align-items-center">
                                              <p class="card-text text-uppercase fs-14 m-0 fw-bold">${prodcut.rating.rate} <i class="bi bi-star-fill text-success pe-1"></i></p>
                                              <p class="card-text text-uppercase fs-14 m-0 fw-bold">|  ${prodcut.rating.count}</p>
                                              </div>
                                              <div class="d-flex align-item-center">
                                              <p class="card-text  fs-5 text-center text-primary fw-bold m-0">${prodcut.seling_price}</p>
                                              <p class="opacity-75 text-decoration-line-through text-center text-primary fw-semibold">${prodcut.orginal_price}</p>
                                              </div>
                                              <p>Best Price: Rs. 863</p>
                                              <ui>
                                                <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
                                                <li>Coupon code: MYNTRA200</li>
                                                <li>Coupon Discount: Rs. 192 off (check cart for final savings)</li>
                                                <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
                                              </ui>
                                              View Eligible Products
                                              Get additional offer
                                              Buy this style and unlock additional ₹50 off on a selected catalogue.
                                              View Products
                                              15% Instant Discount on OneCard Credit Card.
                                              Min Spend ₹3,000. Max Discount Up to ₹1000.
                                              Terms & Condition</p>
                                              <div id="addcrt">
                                              <a href="checkout.html" class="btn btn-outline-primary  fw-semibold col-12 text-uppercase fw-semibold">buy now</a>
                                              </div>
                                            </div>
                                          </div>
                                    </div>
                                </div>
                            </div>
                </div>
        `
    let cardtitle = document.createElement("h6")
    cardtitle.classList.add("fw-bold", "text-uppercase", "m-0", "ps-2")
    cardtitle.innerHTML = prodcut.prodcuts_name

    let orginal = document.createElement("p")
    orginal.classList.add("fw-bold", "fs-6", "text-decoration-line-through", "text-muted", "m-0", "ps-2")
    orginal.innerHTML = `rs${prodcut.orginal_price}`

    let seling = document.createElement("p")
    seling.classList.add("fw-bold", "fs-5", "m-0", "ps-2")
    seling.innerHTML = `rs ${prodcut.seling_price}`

    let margeprice = document.createElement("div")
    margeprice.classList.add("d-flex", "align-items-center", "text-capitalize", "m-0", "ps-2")
    margeprice.append(seling, orginal)

    let cardcat = document.createElement("p")
    cardcat.classList.add("text-muted", "text-capitalize", "fs-14", "m-0", "ps-2")
    cardcat.innerHTML = prodcut.prodcuts_deatil

    let rate = document.createElement("p")
    rate.classList.add("ps-2", "fs-14")
    rate.innerHTML = `${prodcut.rating.rate}<i class="bi bi-star-fill"></i>  |  ${prodcut.rating.count}`
    if (prodcut.rating.rate > 4) {
      rate.classList.add("text-primary", "m-0")
    }
    else if (prodcut.rating.rate > 3) {
      rate.classList.add("text-success")
    }
    else if (prodcut.rating.rate > 2) {
      rate.classList.add("text-warning")
    }
    else {
      rate.classList.add("text-danger")
    }

    let buybtn = document.createElement("button")
    buybtn.innerHTML = "buy now"
    buybtn.classList.add("btn", "btn-outline-primary", "fw-semibold", "col-12", "text-uppercase")
    buybtn.addEventListener("click", () => addcartfn(prodcut))
    
    let s=document.createElement("div")
    s.classList.add("fw-semibold", "fs-6", "m-0", "ps-3")
    s.innerHTML=`<label for="size">size : </label>
    <select name="size" id="size" class="my-2 py-1 px-3 rounded-3 border-danger text-danger fw-semibold text-capitalize">
        <option value="m" >m</option>
        <option value="l">l</option>
        <option value="s">s</option>
        <option value="xl">xl</option>
        <option value="xxl">xxl</option>
    </select>`

    let pdeatail=document.createElement("p")
    pdeatail.innerHTML=`<p  class="m-0">Best Price: Rs. ${prodcut.seling_price}</p>
    <ui>
      <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
      <li>Coupon code: MYNTRA200</li>
    </ui>`
    let card = document.createElement("div")
    card.classList.add("card","col-9", "border-0", "text-enter")
    card.append(cardtitle, rate, cardcat, margeprice ,s,pdeatail,buybtn)
    let div = document.createElement("div")
    div.classList.add("col-12", "my-2","row", "p-2", "shadow")
    div.append(cardimg,card)

    document.getElementById("bag").append(div)
  })
}
  
  let get = () => {
    fetch("http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data)=>{ui(data)})
  };
  
  get();