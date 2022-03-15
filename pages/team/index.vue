<template>
  <div class="team">
    <div
      class="intro d-flex align-items-center justify-content-center text-white"
    >
      <div class="video text-center">
        <h1 class="mx-auto">Our wonderful team</h1>
        <i class="mdi mdi-play-circle"></i>
      </div>
    </div>

    <div class="slider">
      <b-carousel :interval="4000" indicators>
        <b-carousel-slide v-for="num in 3" :key="num">
          <template #img>
            <div class="slide-text mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis dolorem aliquid, suscipit sed vitae exercitationem
              ullam ipsa omnis. Facilis doloremque sed veniam, et corrupti quia
              velit harum quod est nulla?
            </div></template
          >
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="staff mt-4">
      <div class="container">
        <h1 class="title">Our great team</h1>

        <div class="row people">
          <p v-if="employees.length === 0" class="text-secondary px-3">
            No data found.
          </p>

          <div
            v-for="emp in employees.slice(0, limit)"
            :key="emp.id"
            class="col-lg-4 col-sm-6 col-11 mx-auto person mt-3"
          >
            <b-card>
              <img
                :src="emp.imgUrl"
                :alt="emp.firstName + ' ' + emp.lastName"
              />

              <h4 class="mt-3 px-3 font-weight-bold mb-1">
                {{ emp.firstName }} {{ emp.lastName }}
              </h4>

              <p class="position mb-1 px-3">{{ emp.position }}</p>

              <p class="text-secondary mb-3 px-3 small">
                <span class="d-inline-block">From: {{ emp.from }}</span>
                <span class="d-inline-block ml-3">To: {{ emp.to }}</span>
              </p>
            </b-card>
          </div>
        </div>

        <div class="row mt-4 justify-content-center">
          <button
            v-if="employees.length > 6 && limit === 6"
            class="ml-md-5 ml-0 mt-md-0 mt-3"
            @click="showAll"
          >
            See all
          </button>
          <button
            v-if="employees.length > 6 && limit === employees.length"
            class="ml-md-5 ml-0 mt-md-0 mt-3"
            @click="showLess"
          >
            See all
          </button>
        </div>
      </div>
    </div>

    <div
      class="people-quantity d-flex flex-wrap align-items-center justify-content-center flex-md-row flex-column mt-4 py-4 px-2"
    >
      <div class="d-flex align-items-center">
        <span class="d-inline-block text text-center"
          >People worked with us:</span
        >
        <span class="d-inline-block quantity ml-3">+100</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TeamPage',
  data() {
    return {
      limit: 6,
    }
  },
  computed: {
    ...mapGetters({
      employees: 'getEmployees',
    }),
  },
  methods: {
    showAll() {
      this.limit = this.employees.length
    },
    showLess() {
      this.limit = 6
    },
  },
}
</script>
