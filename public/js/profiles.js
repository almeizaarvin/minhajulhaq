

var booklet = document.querySelector('#booklet');

    bookletProfile= 
        `
  <div class="col s12 m6 l4">
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://s19.postimg.org/rs95dw3b7/beautiful-flower-pictures-and-wallpapers-2.jpg">
      <div style="display: inline-block; position: absolute; top: -11px; right: -11px; z-index: 10;">
        <img class="activator" src="https://s19.postimg.org/hu8uz903n/new-posts.png">
      </div>
    </div>

    <!-- card text content -->
    <div class="card-content activator">
      <span class="card-title">
        <p>Nama Lengkap</p>
      </span>
      <p>$10.00</p>
    </div>

    <!--   card reveal content -->
    <div class="card-reveal">
      <span class="card-title">
        <i class='fa fa-times right'></i>
        <div>Name of the listing </div>
      </span>
      <p><span class="fa fa-money icon"></span>&emsp; $10.00</p>
      <p><span class=" fa fa-user icon"></span>&emsp; Uploader : name of the uploader</p>
      <p><span class="fa fa-map-marker icon"></span>&emsp; loaction : location of the uploader</p>
      <p><span class="fa fa-envelope icon"></span>&emsp; Email: email1234@martopolis.com</p>

    </div>
    <div class="card-content">
      <div class="card-action">
        <div class="fixed-action-btn">

          <a class="btn-floating btn-large waves-effect waves-light red"><i class="fa fa-share-square-o"></i></a>
          <ul>
            <li><a href='#' class="btn-floating blue"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#" class="btn-floating red"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#" class="btn-floating blue"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#" class="btn-floating red"><i class="fa fa-envelope-o"></i></a></li>
          </ul>
        </div>
        <a href="#" class="waves-effect waves-light btn">view item</a>
      </div>
    </div>
  </div>
</div>




        `;

booklet.innerHTML = bookletProfile;