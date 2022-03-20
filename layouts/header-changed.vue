<template>
  <the-loader v-if="isLoading"></the-loader>
  <div v-else class="wrapper">
    <the-header :alternative="true"></the-header>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    ...mapGetters({
      isFirstTime: 'getFirstTime',
    }),
  },
  beforeMount() {
    if (this.isFirstTime) {
      setTimeout(() => {
        this.isLoading = false
        this.changeFirstTime(false)
      }, 5000)
    } else {
      this.isLoading = false
    }
  },
  methods: {
    ...mapActions({
      changeFirstTime: 'changeFirstTime',
    }),
  },
}
</script>
