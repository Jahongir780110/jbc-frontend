<template>
  <div class="blogs mb-4">
    <div class="container">
      <div
        class="row head d-flex align-items-center justify-content-between mt-4 px-3"
      >
        <h1 class="font-weight-bold">Blog list</h1>
        <b-form-input
          v-model="search"
          type="search"
          placeholder="Search the blog..."
        ></b-form-input>
      </div>

      <div class="row blogs-group mt-4">
        <p v-if="blogs.slice(0, limit).length === 0" class="text-secondary">
          No blogs found
        </p>
        <div
          v-for="blog in blogs.slice(0, limit)"
          :key="blog.id"
          class="blog-card row mb-4"
        >
          <div class="col-xl-4 col-lg-6 col-12 img px-0">
            <nuxt-link :to="'/blog/' + blog.id">
              <img :src="blog.img" :alt="blog.title" class="h-100" />
            </nuxt-link>
          </div>

          <div class="col-xl-8 col-lg-6 col-12 info px-3 pt-3">
            <div
              class="w-100 d-sm-flex align-items-center justify-content-between"
            >
              <h4 class="font-weight-bold title">
                <nuxt-link :to="'/blog/' + blog.id">{{ blog.title }}</nuxt-link>
              </h4>
              <span class="text-secondary">{{ blog.date }}</span>
            </div>
            <p class="info mt-2">
              {{ blog.text | shorten }}
            </p>
            <p class="text-right">
              <nuxt-link :to="'/blog/' + blog.id" class="d-inline-block ml-auto"
                >Full view</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>

      <div class="buttons">
        <button
          v-if="blogs.length > 3 && limit === 3"
          class="mx-auto"
          @click="seeMore"
        >
          See more
        </button>
        <button
          v-if="blogs.length > 3 && limit === blogs.length"
          class="mx-auto"
          @click="seeLess"
        >
          See less
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BlogsPage',
  filters: {
    shorten(value) {
      if (process.client) {
        const span = document.createElement('span')
        span.innerHTML = value
        return span.textContent.length > 600
          ? span.textContent.slice(0, 600) + '...'
          : span.textContent
      } else {
        return ''
      }
    },
  },
  layout: 'header-changed',
  data() {
    return {
      search: '',
      limit: 3,
    }
  },
  computed: {
    ...mapGetters({
      getBlogs: 'getBlogs',
    }),
    blogs() {
      return this.getBlogs.filter((b) => {
        return (
          b.text.toLowerCase().includes(this.search.toLowerCase()) ||
          b.title.toLowerCase().includes(this.search.toLowerCase())
        )
      })
    },
  },
  methods: {
    seeMore() {
      this.limit = this.blogs.length
    },
    seeLess() {
      this.limit = 3
    },
  },
}
</script>
