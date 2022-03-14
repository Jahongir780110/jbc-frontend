<template>
  <div
    class="error d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="display-4 font-weight-bold">OOPS!</h1>
    <h4>404 - PAGE NOT FOUND</h4>
    <p class="text-center text-secondary mb-2">
      <small>
        SORRY, BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN
        REMOVED,
        <br />
        NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
      </small>
    </p>
    <nuxt-link to="/">
      <b-button variant="primary">Go Home</b-button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'empty',
}
</script>
