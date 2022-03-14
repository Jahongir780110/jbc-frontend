<template>
  <div class="landing-page">
    <div class="intro">
      <h2 class="text-white text-center mx-auto">
        Coming together is a beginning, staying together is a progress and
        working together is success.
      </h2>
    </div>

    <div class="info">
      <div class="container info-card">
        <div class="row p-4">
          <div class="top">
            <div class="row">
              <div class="col-xl-5 col-md-6 col-12 title">
                <span class="blue">Joongang</span>
                <span class="grey">business</span> konsulting
              </div>
              <div class="col-xl-7 col-md-6 col-12 para mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                omnis molestiae qui soluta voluptatum minus earum et saepe
                iusto, cum quas veritatis ducimus! Deleniti, non. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Necessitatibus qui
                commodi consequuntur? Ad suscipit deserunt repellendus est
                voluptatum, corrupti neque.
              </div>
            </div>
          </div>
          <div class="bottom mt-3">
            <div class="row">
              <div class="col-xl-5 col-md-6 col-12">
                <div class="row align-items-center mt-4">
                  <div class="col-xl-6 col-4">
                    <span
                      class="d-flex align-items-center justify-content-center exclamation text-white ml-auto mr-4"
                    >
                      <i class="mdi mdi-exclamation-thick"></i>
                    </span>
                  </div>
                  <div class="col-xl-6 col-8">
                    <h4>True Cloud Web</h4>
                    <p class="para mb-1">
                      True Cloud Web Hostinrg All of the hosting packages we
                      offer are
                    </p>
                    <nuxt-link to="/" class="view"
                      >view <i class="mdi mdi-arrow-right-thin"></i
                    ></nuxt-link>
                  </div>
                </div>
              </div>
              <div class="col-xl-7 col-md-6 col-12">
                <div class="row align-items-center mt-4">
                  <div class="col-xl-6 col-4">
                    <span
                      class="d-flex align-items-center justify-content-center exclamation text-white ml-auto mr-4"
                    >
                      <i class="mdi mdi-exclamation-thick"></i>
                    </span>
                  </div>
                  <div class="col-xl-6 col-8">
                    <h4>True Cloud Web</h4>
                    <p class="para mb-1">
                      True Cloud Web Hostinrg All of the hosting packages we
                      offer are
                    </p>
                    <nuxt-link to="/" class="view"
                      >view <i class="mdi mdi-arrow-right-thin"></i
                    ></nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container info-main">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 left">
            <div class="title">True Cloud Web</div>
            <div class="para mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo minima nihil ab optio in totam dolorem, veniam saepe,
              facilis possimus quas, officia dolor nisi architecto repellendus
              excepturi qui corporis quia ad? Corrupti ut eaque quos aliquam
              corporis. Possimus, alias error!
            </div>
          </div>
          <div class="col-md-6 col-12 right mt-md-0 mt-4 px-sm-0 px-2">
            <img
              src="~/static/images/team-showing.png"
              class="w-100"
              alt="team"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="opinion-short mt-5 pt-4 pb-md-0 pb-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6 col-10 mx-auto left">
            <img
              src="~/static/images/man-with-laptop.png"
              alt="Man with laptop"
              class="w-100"
            />
          </div>
          <div class="col-sm-6 col-12 right pl-sm-5 pl-4 mt-sm-0 mt-3">
            <div class="opinion-title">True Cloud Web</div>
            <div class="para mt-sm-3 mt-2">
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

    <div class="blogs-short container mt-5">
      <div class="blogs-title text-center">Our featured blogs</div>
      <div class="row mt-4">
        <div v-if="blogs.length === 0" class="text-secondary mx-auto col-12">
          No blogs found
        </div>
        <div
          v-for="blog in blogs.slice(0, 3)"
          :key="blog.id"
          class="col-md-4 col-11 mx-auto px-4 mt-md-0 mt-3"
        >
          <img :src="blog.img" :alt="blog.title" class="w-100" />
          <div class="para mt-4">
            {{ blog.text }}
          </div>
          <nuxt-link :to="'/blog/' + blog.id" class="view d-inline-block mt-3"
            >view <i class="mdi mdi-arrow-right-thin"></i
          ></nuxt-link>
        </div>
      </div>
    </div>

    <div class="about-short mt-5">
      <div class="container">
        <div class="about-title text-center">What people say about us</div>
        <b-carousel v-model="slides" :interval="4000" indicators class="mt-3">
          <b-carousel-slide v-for="num in 3" :key="num">
            <template #img>
              <div class="row px-1">
                <div
                  class="col-3 col-0 images d-lg-flex d-none flex-column justify-content-between pr-5"
                >
                  <div class="image text-center">
                    <img
                      src="~/static/images/guy-with-laptop.png"
                      alt="guy with laptop"
                    />
                  </div>
                  <div class="image text-right">
                    <img
                      src="~/static/images/guy-with-laptop.png"
                      alt="guy with laptop"
                    />
                  </div>
                  <div class="image pl-4">
                    <img
                      src="~/static/images/guy-with-laptop.png"
                      alt="guy with laptop"
                    />
                  </div>
                </div>
                <div
                  class="about-card col-lg-6 col-md-8 col-sm-10 col-11 mt-4 mx-auto text-center"
                >
                  <img
                    src="~/static/images/guy-with-laptop.png"
                    alt="guy with laptop"
                    class="about-avatar"
                  />
                  <div class="para w-75 mt-3 mx-auto">
                    True Cloud Web Hosting of hte hosting packages we offer are
                    dployed instantly on our SSD powered cloud.
                  </div>
                </div>
                <div
                  class="col-3 images d-lg-flex d-none flex-column justify-content-between pl-5"
                >
                  <div class="image text-center">
                    <img
                      src="~/static/images/guy-with-laptop.png"
                      alt="guy with laptop"
                    />
                  </div>
                  <div class="image text-left">
                    <img
                      src="~/static/images/guy-with-laptop.png"
                      alt="guy with laptop"
                    />
                  </div>
                  <div class="image text-right pr-4">
                    <img
                      src="~/static/images/guy-with-laptop.png"
                      alt="guy with laptop"
                    />
                  </div>
                </div>
              </div>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>

    <div class="services-short">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-12 left">
            <div class="title text-center">True Cloud Web</div>
            <div class="info text-center mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quibusdam aut laboriosam illo sapiente nostrum dolore vero vitae,
              impedit quam voluptatibus delectus. Aspernatur velit minima
              deleniti quis aliquid fugiat molestias ea possimus. Facere,
              voluptates.
            </div>
            <button class="button mt-4 mx-auto">See</button>
          </div>
          <div class="col-lg-7 col-12 right mt-lg-0 mt-4">
            <div class="service-card d-flex align-items-center mx-lg-0 mx-auto">
              <div class="number">01</div>
              <div class="text ml-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                soluta ipsum natus nulla dolore cumque quis dicta saepe esse. At
                rem quam id, corporis explicabo expedita voluptas nulla corrupti
                unde ab officiis! Cum modi quisquam amet?
              </div>
            </div>
            <div
              class="service-card d-flex align-items-center mt-4 ml-lg-auto mx-lg-0 mx-auto"
            >
              <div class="number">02</div>
              <div class="text ml-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                soluta ipsum natus nulla dolore cumque quis dicta saepe esse. At
                rem quam id, corporis explicabo expedita voluptas nulla corrupti
                unde ab officiis! Cum modi quisquam amet?
              </div>
            </div>
            <div
              class="service-card d-flex align-items-center mt-4 mx-lg-0 mx-auto"
            >
              <div class="number">03</div>
              <div class="text ml-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                soluta ipsum natus nulla dolore cumque quis dicta saepe esse. At
                rem quam id, corporis explicabo expedita voluptas nulla corrupti
                unde ab officiis! Cum modi quisquam amet?
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
  name: 'MainPage',
  data() {
    return {
      slides: 0,
    }
  },
  computed: {
    ...mapGetters({
      getBlogs: 'getBlogs',
    }),
    blogs() {
      if (!process.client) {
        return []
      }
      return this.getBlogs
        .map((b) => {
          const span = document.createElement('span')
          span.innerHTML = b.text
          const text =
            span.textContent.length > 200
              ? span.textContent.slice(0, 200) + '...'
              : span.textContent
          return {
            id: b.id,
            img: b.img,
            text,
            title: b.title,
          }
        })
        .slice(0, 3)
    },
  },
}
</script>
