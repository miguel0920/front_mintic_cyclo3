<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #28a745;">
            <a class="navbar-brand" href="/Dashboard">FEDEMY</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/users">Usuarios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Paquetes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Ordenes</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
  
<style>
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #ffffff;
}

.navbar-light .navbar-nav .nav-link {
    color: rgb(255, 255, 255);
}

.navbar-light .navbar-brand {
    color: rgba(255, 255, 255, 0.9) !important;
}
</style>
  