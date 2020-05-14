document.getElementById('smallScreen').innerHTML = (`
<nav class="navbar navbar-expand-sm navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">sportives</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">urbaines</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">hybrides</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">enfants</a>
      </li>

      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Marques</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    </ul>
  </div>
</nav>
`)

document.getElementById('largeScreen').innerHTML = (`
<ul class="nav flex-column">

<li class="nav-item">
  <a class="nav-link" id="test" href="#">sportives</a>
</li>

<li class="nav-item">
  <a class="nav-link" href="#">urbaines</a>
</li>

<li class="nav-item">
  <a class="nav-link" href="#">hybrides</a>
</li>

<li class="nav-item">
  <a class="nav-link" href="#">enfants</a>
</li>

<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Marques</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
</li>
`)

document.getElementById('test').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'red'
});