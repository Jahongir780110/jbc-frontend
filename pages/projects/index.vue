<template>
  <div class="projects mb-4">
    <div
      v-for="project in projects"
      :key="project.name"
      :class="project.classes"
    >
      <div class="container">
        <h1 class="font-weight-bold">{{ project.name }}</h1>

        <div class="image mt-4">
          <img :src="project.imgSrc" :alt="project.imgName" />
        </div>

        <div class="info mt-4">
          <div class="row top align-items-center">
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

            <div class="col-sm-5 border-left px-sm-4 col-12 d-sm-block d-flex">
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

          <div class="row bottom mt-sm-5 mt-3">
            <div class="col-sm-4 col-12 left">
              <h2 class="font-weight-bold">About</h2>
            </div>

            <div class="col-sm-8 col-12 right">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                vero! Omnis voluptate modi ducimus quibusdam rem. Quaerat libero
                molestias recusandae enim suscipit asperiores consequuntur, ut
                quibusdam. Harum, ad eaque nostrum nulla iure omnis, nesciunt
                tempora, saepe reprehenderit ex autem odit.
              </p>

              <div class="stats row mt-5">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  layout: 'header-changed',
  data() {
    return {
      projects: [
        {
          name: 'Cloud-ultrasound',
          imgSrc: require('../../static/images/cloud.png'),
          imgName: 'Cloud Ultrasound',
          classes: 'mt-4',
        },
        {
          name: 'Lego Robot',
          imgSrc: require('../../static/images/robo-lego.png'),
          imgName: 'Robot Lego',
          classes: 'mt-5',
        },
      ],
    }
  },
}
</script>
