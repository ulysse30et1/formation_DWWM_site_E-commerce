//barre de navigation pour ecrant de tel / tablette

document.getElementById('smallScreen').innerHTML = (`
<nav class="navbar navbar-expand-sm navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" id="sportives" href="#">sportives</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" id="urbaines" href="#">urbaines</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" id="hybrides" href="#">hybrides</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" id="enfants" href="#">enfants</a>
      </li>

      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Marques</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" id="samsung" href="#">samsung</a>
        <a class="dropdown-item" id="Fossil" href="#">Fossil</a>
        <a class="dropdown-item" id="fitbit" href="#">fitbit</a>
        <a class="dropdown-item" id="apple" href="#">apple</a>
        <a class="dropdown-item" id="huawei" href="#">huawei</a>
        <a class="dropdown-item" id="kiwip" href="#">kiwip</a>
        </div>
    </li>
    </ul>
  </div>
</nav>
`)

//barre de navigation pour ecrants larges

document.getElementById('largeScreen').innerHTML = (`
<ul class="nav flex-column">

<li class="nav-item">
  <a class="nav-link" id="sportives" href="#">sportives</a>
</li>

<li class="nav-item">
  <a class="nav-link" id="urbaines" href="#">urbaines</a>
</li>

<li class="nav-item">
  <a class="nav-link" id="hybrides" href="#">hybrides</a>
</li>

<li class="nav-item">
  <a class="nav-link" id="enfants" href="#">enfants</a>
</li>

<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Marques</a>
    <div class="dropdown-menu">
    <a class="dropdown-item" id="samsung" href="#">samsung</a>
    <a class="dropdown-item" id="Fossil" href="#">Fossil</a>
    <a class="dropdown-item" id="fitbit" href="#">fitbit</a>
    <a class="dropdown-item" id="apple" href="#">apple</a>
    <a class="dropdown-item" id="huawei" href="#">huawei</a>
    <a class="dropdown-item" id="kiwip" href="#">kiwip</a>
    </div>
</li>
`)

// mise en place du footer 

let footer = document.querySelector('footer').innerHTML = (`
<footer class="page-footer font-small blue pt-4 bg-secondary text-white">
  <div class="container-fluid text-center text-md-left">
    <div class="row">
    <div class="col-12 mt-md-0 mt-3 text-center">
        <h6 class="text-uppercase">Carte</h6>
        <div class="map mb-5">
        <p class="mb-2"<i class="fas fa-home mr-1 mb-2"></i>12 rue Paul Cézanne, 80000 Amiens</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.729874146789!2d2.294551816021174!3d49.92264467940603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7869845e11ec5%3A0x84ca374719a5b955!2s12%20Rue%20Paul%20C%C3%A9zanne%2C%2080080%20Amiens!5e0!3m2!1sfr!2sfr!4v1589457832869!5m2!1sfr!2sfr" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        </div>
    <div class="col-md-4 mt-md-0 mt-3 text-center">
    <h6 class="text-uppercase">A propos de nous</h6>
    <p> Petite entreprise à taille humaine , nous proposons des smartwatch à prix compétitif , qualités garanties.
    Notre S.A.V est performant pour toutes questions ou retour sur nos produits .
    N'hesitez pas à nous contactez.
    </p>
    </div>
      
      <hr class="clearfix w-100 d-md-none pb-3">
      <div class="col-md-4 mb-md-0 mb-3 text-center">
        <h6 class="text-uppercase">Contact</h6>
        <ul class="list-unstyled">
        
        <li>
          <i class="fas fa-envelope mr-2"></i>
          <a href="mailto:smartSmile@gmail.com" class="list-footer text-white" target="_blank" >smartSmile@gmail.com</a>
          </li>
        <li>
          <i class="fas fa-phone-square-alt mr-2"></i>
          <a class="list-footer">06-66-48-98-14</a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 mb-md-0 mb-3 text-center">
        <h6 class="text-uppercase">Informations légales</h6>
        <ul class="list-unstyled">
          <li>
            <a href="legals.html" class="list-footer text-white" target="_blank">Mentions Légales</a>
          </li>
          <li>
            <a href="Condition de ventes.html" class="list-footer text-white" target="_blank">Nos Conditions de Vente</a>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/" class="text-warning">By Ulysse Chazot, Gautier Chassang, Kevyn Amaral.</a>
  </div>
</footer>
`)

//affichage des produits en fonction des selections