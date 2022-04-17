<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1>Sneakers</h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link 
                  to="/"
                  tag = "a"
                  class="nav-link">
                  Collections
                  </router-link>
              </li>
              <li class="nav-item">
                <router-link 
                  to="/about"
                  tag = "a"
                  class="nav-link">
                  About
                  </router-link>
              </li>
              <li class="nav-item">
                <router-link 
                  to="/contact"
                  tag = "a"
                  class="nav-link">
                  Contact
                  </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>

