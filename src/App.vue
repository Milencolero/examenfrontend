<template>
    <div id="nav">  
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand">Programación Front End</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item ms-5">
              <router-link class="nav-link" to="/notas">Cálculo de calificaciones</router-link>
            </li>
            <li class="nav-item ms-5"> 
              <router-link class="nav-link" to="/formulario">Formulario de Registro</router-link>
            </li>
            <li class="nav-item ms-5"> 
            <router-link class="nav-link" to="/construccion">En Construccion</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">Búsqueda</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
    </div>
    <router-view />
</template>


