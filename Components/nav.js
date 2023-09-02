const nav=()=>{
    return`<nav class="navbar navbar-expand-lg py-3">
    <div class="container">
      <a class="navbar-brand col-1" href="#"><img src="/img/myntra_logo.png" alt="myntra" class="col-lg-5 col-12"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSup  portedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2x">
          <li class="nav-item">
            <a class="nav-link text-uppercase text-dark fs-14 fw-bold me-1" aria-current="page" href="/Pages/men.html">men</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase text-dark fs-14 fw-bold me-1" href="/Pages/women.html">women</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase text-dark fs-14 fw-bold me-1" href="/Pages/kids.html">kids</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase text-dark fs-14 fw-bold me-1" href="/Pages/homes_living.html">HOME & living</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase text-dark fs-14 fw-bold me-1" href="/Pages/beauty.html">beauty</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase text-dark fs-14 fw-bold me-1" href="/Pages/studio.html">studio</a>
          </li>
        </ul>
        <form class="d-flex col-4">
          <input id="search" class="form-control border-0 bg-light" type="search" placeholder="Search for prodcuts, brands and more" aria-label="Search">
          <div id="results"></div>
        </form>
        <form class="d-flex">
            <a href="/Pages/signup.html" class="border-0 mx-3 bg-none text-dark text-center"><i class="bi bi-person fs-5"></i><h6 class="fs-14 fw-bold text-uppercase">profile</h6></a>
            <a href="#" class="border-0 mx-3 bg-none text-dark text-center"><i class="bi bi-heart fs-5"></i><h6 class="fs-14 fw-bold text-uppercase">wishlist</h6></a>
            <a href="#" class="border-0 mx-3 bg-none text-dark text-center"><i class="bi bi-bag fs-5"></i><h6 class="fs-14 fw-bold text-uppercase">bags</h6></a>
        </form>
      </div>
    </div>
  </nav>`
}
export default nav;