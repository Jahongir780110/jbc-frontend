<template>
  <div class="about">
    <div class="container head mt-sm-5 mt-3">
      <div class="row">
        <div class="col-lg-6 col-md-5 col-12 title">
          <h1 class="font-weight-bold">Joongang Business Consulting</h1>
        </div>
        <div class="col-lg-6 col-md-7 col-12 text mt-md-0 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt iure
          pariatur minus corporis voluptatem earum! Autem illum neque
          perspiciatis? Voluptatum fugiat excepturi esse quis molestiae
          pariatur, nobis atque eligendi ea ab libero. Distinctio, animi labore
          ratione repellat quae non atque obcaecati praesentium beatae sit
          necessitatibus id maxime alias aliquam voluptatum quod voluptate
          itaque. Voluptatem autem tempora eum ea obcaecati ratione quam minus
          libero eaque eius dignissimos hic quia sequi eos quibusdam voluptate
          blanditiis nulla repudiandae, sed ut saepe ad at. Ducimus debitis
          nihil fugiat perspiciatis, veritatis magni vero nobis temporibus
          quaerat sint facilis, illum neque possimus impedit a non delectus.
        </div>
      </div>
    </div>

    <div class="image mt-5"></div>

    <div class="container">
      <div class="row">
        <div
          class="col-sm-12 col-11 mx-auto about-card py-sm-5 py-3 text-center"
        >
          <h3 class="font-weight-bold">Some title text</h3>
          <p class="text mx-auto text-center mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            dolore in error nostrum, ipsam soluta et molestiae officia quasi
            labore illo culpa. Dolore harum officiis deleniti beatae optio.
            Voluptates ullam est modi aspernatur suscipit quas illum laboriosam
            minima rerum voluptatum?
          </p>
        </div>
      </div>
    </div>

    <div class="container project mt-5">
      <div class="row">
        <div class="col-12">
          <h1 class="font-weight-bold">Our project</h1>

          <div class="project-image mt-4">
            <img
              :src="require('../../static/images/cloud.png')"
              alt="Cloud Ultrasound"
            />
          </div>

          <div class="info mt-5">
            <div class="row top">
              <div class="col-md-4 col-12 left">
                <h2 class="font-weight-bold">About</h2>
              </div>

              <div class="col-md-8 col-12 right">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  vero! Omnis voluptate modi ducimus quibusdam rem. Quaerat
                  libero molestias recusandae enim suscipit asperiores
                  consequuntur, ut quibusdam. Harum, ad eaque nostrum nulla iure
                  omnis, nesciunt tempora, saepe reprehenderit ex autem odit.
                </p>

                <div class="stats row mt-sm-5 mt-3">
                  <div class="col-4">
                    <h2 class="font-weight-bold text-center">+1.200</h2>
                    <div class="text-center">users</div>
                  </div>
                  <div class="col-4">
                    <h2 class="font-weight-bold text-center">+1.200</h2>
                    <div class="text-center">users</div>
                  </div>
                  <div class="col-4">
                    <h2 class="font-weight-bold text-center">+1.200</h2>
                    <div class="text-center">users</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row bottom align-items-center mt-5">
              <div class="col-sm-7 col-12">
                <h2 class="font-weight-bold">About</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit rerum, hic voluptas magni cum dignissimos
                  praesentium, deserunt perferendis quam reiciendis ratione.
                  Laborum suscipit tempora assumenda illum blanditiis natus
                  cupiditate nobis obcaecati eum omnis voluptatibus molestias
                  veniam voluptas, porro eos maxime cum, minus iure. Labore
                  dignissimos perspiciatis expedita autem dolores enim!
                </p>
              </div>

              <div
                class="col-sm-5 border-left px-sm-4 col-12 d-sm-block d-flex"
              >
                <div>
                  <h3 class="font-weight-bold">About</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati nobis sed iure incidunt quos culpa enim inventore
                    facilis eum officiis!
                  </p>
                </div>
                <div class="ml-sm-0 ml-4">
                  <h3 class="font-weight-bold mt-sm-4 mt-0">About</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis, excepturi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container images mt-5">
      <h3 class="font-weight-bold">Title about images</h3>
      <div class="row mt-3">
        <div class="col-md-5 col-12">
          <img
            src="~/static/images/bike.png"
            alt="company image"
            class="h-100"
          />
        </div>
        <div class="col-md-3 col-6 mt-md-0 mt-3">
          <div class="d-flex flex-column justify-content-between h-100">
            <img
              src="~/static/images/bike.png"
              alt="company image"
              class="img-2"
            />
            <img
              src="~/static/images/bike.png"
              alt="company image"
              class="img-3"
            />
          </div>
        </div>
        <div class="col-md-4 col-6 mt-md-0 mt-3">
          <div class="d-flex flex-column justify-content-between h-100">
            <img
              src="~/static/images/bike.png"
              alt="company image"
              class="img-4"
            />
            <img
              src="~/static/images/bike.png"
              alt="company image"
              class="img-5"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <button>See all</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'header-changed',
}
</script>
