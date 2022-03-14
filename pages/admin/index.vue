<template>
  <div class="admin">
    <div class="sidebar" :class="{ shrinked: fullMode }">
      <div
        class="list-item"
        :class="{ active: activeListItem === 'dashboard' }"
        @click="changeTab('dashboard')"
      >
        <i class="mdi mdi-view-dashboard icon"></i>
        <div class="text">Dashboard</div>
      </div>
      <div
        class="list-item"
        :class="{ active: activeListItem === 'vacancy' }"
        @click="changeTab('vacancy')"
      >
        <i class="mdi mdi-briefcase icon"></i>
        <div class="text">Add vacancy</div>
      </div>
      <div
        class="list-item"
        :class="{ active: activeListItem === 'employee' }"
        @click="changeTab('employee')"
      >
        <i class="mdi mdi-account-tie icon"></i>
        <div class="text">Add Employee</div>
      </div>
      <div
        class="list-item"
        :class="{ active: activeListItem === 'blog' }"
        @click="changeTab('blog')"
      >
        <i class="mdi mdi-post icon"></i>
        <div class="text">Add blog</div>
      </div>
    </div>
    <div class="main" :class="{ enlarged: fullMode }">
      <div class="main-header">
        <i
          class="mdi"
          :class="{
            'mdi-backburger': !fullMode,
            'mdi-forwardburger': fullMode,
          }"
          @click="changeMenu"
        ></i>
        <div class="text flex-fill pl-2 text-capitalize">
          {{ activeListItem }}
        </div>
        <i class="mdi mdi-logout" @click="logout"></i>
      </div>

      <the-dashboard v-if="activeListItem === 'dashboard'"></the-dashboard>
      <add-vacancy v-if="activeListItem === 'vacancy'"></add-vacancy>
      <add-employee v-if="activeListItem === 'employee'"></add-employee>
      <add-blog v-if="activeListItem === 'blog'"></add-blog>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AdminPage',
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      fullMode: false,
      activeListItem: 'dashboard',
    }
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
  },
  methods: {
    ...mapActions({
      onLogout: 'auth/logout',
    }),
    changeMenu() {
      this.fullMode = !this.fullMode
    },
    changeTab(value) {
      this.activeListItem = value
    },
    logout() {
      this.onLogout()
      this.$router.push('/admin/login')
    },
  },
}
</script>
