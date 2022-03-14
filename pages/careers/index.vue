<template>
  <div class="careers">
    <div class="vacancies py-5">
      <div class="container">
        <h1 class="font-weight-bold text-center title">
          Do you want to work with us?
        </h1>
        <p class="mt-4 text-center para mx-auto">
          True Cloud Web Hosting All of the hosting packages we offer are
          deployed instantly on our SSD powered cloud.
        </p>
        <div class="row vacancy-group mt-5 mx-sm-0 mx-2">
          <the-job v-for="vac in vacancies" :key="vac.id" :data="vac"></the-job>
          <p v-if="vacancies.length === 0" class="text-secondary">
            No vacancies found.
          </p>
        </div>
        <button
          v-if="getVacancies.length > 4 && vacancies.length === 4"
          class="mt-4 mx-auto"
          @click="showAll"
        >
          See all
        </button>
        <button
          v-if="
            getVacancies.length > 4 && vacancies.length === getVacancies.length
          "
          class="mt-4 mx-auto"
          @click="showLess"
        >
          See less
        </button>
      </div>
    </div>

    <div class="opinion-short pt-4 pb-md-0 pb-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6 col-10 mx-auto left">
            <img
              src="~/static/images/man-with-laptop.png"
              alt="Man with laptop"
              class="w-100"
            />
          </div>
          <div class="col-sm-6 col-12 right pl-4 mt-sm-0 mt-3">
            <div class="opinion-title">True Cloud Web</div>
            <div class="opinion-para mt-3 ml-md-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo minima nihil ab optio in totam dolorem, veniam saepe,
              facilis possimus quas, officia dolor nisi architecto repellendus
              excepturi qui corporis quia ad? Corrupti ut eaque quos aliquam
              corporis. Possimus, alias error!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CareersPage',
  layout: 'header-changed',
  data() {
    return {
      limit: 4,
    }
  },
  computed: {
    ...mapGetters({
      getVacancies: 'getVacancies',
    }),
    vacancies() {
      return this.getVacancies
        .filter((vac) => vac.isActive)
        .slice(0, this.limit)
    },
  },
  methods: {
    showAll() {
      this.limit = this.getVacancies.length
    },
    showLess() {
      this.limit = 4
    },
  },
}
</script>
