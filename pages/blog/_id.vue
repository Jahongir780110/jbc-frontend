<template>
  <div class="blog mt-4">
    <div class="container-fluid">
      <div class="container px-0">
        <div class="row">
          <div class="content col-lg-10 col-11 mx-auto px-0">
            <div
              class="title d-sm-flex align-items-center justify-content-between"
            >
              <h1 class="font-weight-bold title">{{ blog.title }}</h1>
              <div class="date text-secondary">
                {{ blog.date }}
              </div>
            </div>
            <div class="image mt-3">
              <img :src="blog.img" :alt="blog.title" class="w-100 rounded" />
            </div>
            <div class="para mt-3" v-html="blog.text"></div>
          </div>
        </div>
      </div>

      <div class="other-blogs row pt-sm-5 pt-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-12 mx-auto px-1">
              <div class="title">
                <h1 class="font-weight-bold mb-4 px-sm-0 px-3">Other blogs</h1>
              </div>
              <div
                v-for="b in otherBlogs"
                :key="b.id"
                class="blog-card row mb-4"
              >
                <div class="col-xl-4 col-lg-5 col-md-6 col-12 img px-0">
                  <nuxt-link :to="'/blog/' + b.id">
                    <img :src="b.img" :alt="b.title" class="h-100" />
                  </nuxt-link>
                </div>
                <div class="col-xl-8 col-lg-7 col-md-6 col-12 info px-3 pt-3">
                  <div
                    class="w-100 d-flex align-items-center justify-content-between"
                  >
                    <h4 class="font-weight-bold">
                      <nuxt-link :to="'/blog/' + b.id" class="title">{{
                        b.title
                      }}</nuxt-link>
                    </h4>
                    <span class="text-secondary">{{ b.date }}</span>
                  </div>
                  <p class="info mt-2">
                    {{ b.text | shorten }}
                  </p>
                  <p class="text-right">
                    <nuxt-link
                      :to="'/blog/' + b.id"
                      class="d-inline-block ml-auto"
                      >Full view</nuxt-link
                    >
                  </p>
                </div>
              </div>
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
  name: 'BlogPage',
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
  computed: {
    ...mapGetters({
      blogs: 'getBlogs',
    }),
    blog() {
      return this.blogs.find((b) => b.id === this.$nuxt.$route.params.id)
    },
    otherBlogs() {
      return this.blogs.filter((b) => b.id !== this.blog.id).slice(0, 3)
    },
  },
}
</script>
