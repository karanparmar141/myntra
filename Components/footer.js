const foot=()=>{
    return`
    <footer class="bg-light p-5">
        <div class="container">
          <div class="border border-1 border-dark border-opacity-10 mb-5"></div>
          <div class="row text-center text-md-start">
            <div class="col-12 col-md-6">
              <img src="img/myntra_logo.png" alt="" class="col-1">
              <div class="company-details">
                <a class="fw-bold fs-4 my-3 text-dark text-decoration-none" href="#">CONTACT INFO</a>
                <a href="#" class="text-decoration-none hover d-block text-dark py-2 footer-hover footer-hover"><i
                    class="bi bi-geo-alt pe-2 fs-4"></i>Brooklyn, New York, United States</a>
                <a href="#" class="text-decoration-none hover d-block text-dark py-2 footer-hover"><i
                    class="bi bi-telephone pe-2 fs-4"></i>+0123-456789</a>
                <a href="#" class="text-decoration-none hover d-block text-dark d-block py-2 footer-hover"><i
                    class="bi bi-envelope pe-2 fs-4"></i>example@example.com</a>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <h4 class="fw-bold">INFORMATION</h4>
              <ol class="list-unstyled ps-2">
                <li class="py-1"><a href="../Pages/men.html" class="text-decoration-none text-uppercase hover fw-semibold text-muted">men</a></li>
                <li class="py-1"><a href="../Pages/women.html" class="text-decoration-none text-uppercase hover fw-semibold text-muted">women</a></li>
                <li class="py-1"><a href="../Pages/kids.html" class="text-decoration-none text-uppercase hover fw-semibold text-muted">kids</a></li>
                <li class="py-1"><a href="../Pages/homes_living.html" class="text-decoration-none text-uppercase hover fw-semibold text-muted">home_decore</a></li>
              </ol>
            </div>
          </div>
        </div>
      </footer>`
}
export default foot;


