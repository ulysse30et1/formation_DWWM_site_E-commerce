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
        <a class="dropdown-item" href="#">samsung</a>
        <a class="dropdown-item" href="#">apple</a>
        <a class="dropdown-item" href="#">Fossil</a>
        <a class="dropdown-item" href="#">fitbit</a>
        <a class="dropdown-item" href="#">huawei</a>
        <a class="dropdown-item" href="#">kiwip</a>
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
    <a class="dropdown-item" href="#">samsung</a>
    <a class="dropdown-item" href="#">apple</a>
    <a class="dropdown-item" href="#">Fossil</a>
    <a class="dropdown-item" href="#">fitbit</a>
    <a class="dropdown-item" href="#">huawei</a>
    <a class="dropdown-item" href="#">kiwip</a>
    </div>
</li>
`)