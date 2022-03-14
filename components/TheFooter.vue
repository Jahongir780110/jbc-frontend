<template>
  <div class="footer text-white">
    <div class="container">
      <div class="row top">
        <div class="col-sm-4 col-12 text-sm-left text-center">
          <p class="mb-0"><nuxt-link to="/projects">Projects</nuxt-link></p>
          <p class="mb-0 mt-2"><nuxt-link to="/team">Team</nuxt-link></p>
          <p class="mb-0 mt-2"><nuxt-link to="/careers">Careers</nuxt-link></p>
        </div>
        <div class="col-sm-4 col-12 text-sm-left text-center">
          <p class="mb-0 mt-sm-0 mt-2">
            <nuxt-link to="/blog">Blog</nuxt-link>
          </p>
          <p class="mb-0 mt-2"><nuxt-link to="/about">About</nuxt-link></p>
          <p class="mb-0 mt-2"><nuxt-link to="/contact">Contact</nuxt-link></p>
        </div>
        <div class="col-sm-4 col-12 text-sm-left text-center mt-sm-0 mt-3">
          <div class="social-buttons">
            <p class="mb-0">Contact us</p>
            <p class="mb-0">
              <nuxt-link to="/"><i class="mdi mdi-send-circle"></i></nuxt-link>
              <nuxt-link to="/"
                ><i class="mdi mdi-instagram ml-2"></i
              ></nuxt-link>
              <nuxt-link to="/"
                ><i class="mdi mdi-facebook ml-2"></i
              ></nuxt-link>
            </p>
            <p class="mb-0 mt-2">Email:</p>
            <p class="mb-0"><nuxt-link to="/">prodvd@gmail.com</nuxt-link></p>
          </div>
        </div>
      </div>

      <div class="row bottom mt-4 py-3 justify-content-center">
        <p class="mb-0 px-3 text-center">
          &copy; 2022 Joongang Business Consulting, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
