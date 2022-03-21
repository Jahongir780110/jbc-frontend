<template>
  <div class="header" :class="{ alternative: alternative }">
    <b-navbar>
      <div class="container">
        <b-navbar-brand to="/" class="text-white">
          <img
            v-if="!alternative"
            src="~/static/images/logo-white.png"
            alt="logo"
          />
          <img v-else src="~/static/images/logo.png" alt="logo" />
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto align-items-center d-md-flex d-none links">
          <b-nav-item
            v-for="item in navItems"
            :key="item"
            :to="'/' + item"
            class="ml-2"
            >{{ $t(item) }}</b-nav-item
          >
        </b-navbar-nav>

        <span class="ml-md-5 ml-auto languages">
          <b-dropdown variant="link" toggle-class="text-decoration-none">
            <template #button-content>
              <span>{{ $i18n.localeProperties.name }}</span>
            </template>
            <b-dropdown-item @click="changeLang('en')">Eng</b-dropdown-item>
            <b-dropdown-item @click="changeLang('ru')">Rus</b-dropdown-item>
            <b-dropdown-item @click="changeLang('uz')">Uzb</b-dropdown-item>
          </b-dropdown>
        </span>

        <span v-b-toggle.sidebar class="menu-button d-md-none d-inline-block">
          <i v-if="!alternative" class="mdi mdi-menu text-white"></i>
          <i v-else class="mdi mdi-menu text-dark"></i>
        </span>

        <b-sidebar
          id="sidebar"
          class="sidebar"
          right
          backdrop
          width="250px"
          :no-header-close="true"
        >
          <h5 class="logo mb-3">
            <nuxt-link class="logo" to="/">Logo</nuxt-link>
          </h5>
          <p v-for="item in navItems" :key="item" class="mb-0 mt-1">
            <nuxt-link :to="'/' + item">{{ $t(item) }}</nuxt-link>
          </p>
        </b-sidebar>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    alternative: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      navItems: ['team', 'careers', 'blog', 'about', 'contact'],
    }
  },
  methods: {
    changeLang(val) {
      this.$i18n.setLocale(val)
    },
  },
}
</script>
