<template>
  <b-card
    class="job-card w-100"
    :class="{ 'mt-0': isShrinked, 'mt-3': !isShrinked }"
  >
    <div class="info flex-fill">
      <div class="title d-flex justify-content-between align-items-center">
        <h2 class="d-inline-block">
          <nuxt-link :to="'/careers/' + data.id">{{ data.title }}</nuxt-link>
        </h2>
        <div class="date text-secondary">
          {{ $moment(data.date).format('MMMM Do YYYY') }}
        </div>
      </div>

      <div class="short-info">
        <span class="location">{{ data.location }}</span
        ><span class="dot ml-2 mr-1"></span>
        <span class="type">{{ data.typeOfEmployment }}</span
        ><span class="dot ml-2 mr-1"></span>
        <span class="city">Tashkent</span>
      </div>

      <div
        v-if="!isShrinked"
        id="desc"
        ref="description"
        class="text-secondary mt-2 mb-0 desc"
      >
        {{ description }}
      </div>
      <p v-if="!isShrinked" class="more mb-0">
        <nuxt-link :to="'/careers/' + data.id">see more</nuxt-link>
      </p>
      <div class="wage mt-2">
        from {{ data.salaryFrom }} to {{ data.salaryTo }} $
      </div>

      <div class="row align-items-center mt-2">
        <div class="col-12">
          <div class="skills">
            <span
              v-for="skill in data.skills"
              :key="skill"
              class="d-inline-block my-1"
            >
              <span class="job-badge mr-2">{{ skill }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'TheJob',
  props: {
    isShrinked: {
      type: Boolean,
      required: false,
      default: false,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    description() {
      if (process.client) {
        const span = document.createElement('span')
        span.innerHTML = this.data.description
        return span.textContent.length > 400
          ? span.textContent.slice(0, 400) + '...'
          : span.textContent
      } else {
        return ''
      }
    },
  },
}
</script>
