<template>
  <div class="about mb-4">
    <div class="container head mt-5">
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

    <div class="container stats">
      <div class="row mx-auto text-center">
        <div class="col-4 px-0">
          <h2 class="font-weight-bold">+1.200</h2>
          <p class="text">users</p>
        </div>
        <div class="col-4 px-0">
          <h2 class="font-weight-bold">+1.200</h2>
          <p class="text">users</p>
        </div>
        <div class="col-4 px-0">
          <h2 class="font-weight-bold">+1.200</h2>
          <p class="text">users</p>
        </div>
      </div>
    </div>

    <div class="container info mt-5">
      <h3 class="font-weight-bold">Info text title</h3>
      <p class="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum porro
        beatae quidem aliquam ullam reiciendis, eligendi eaque debitis at error
        delectus unde minima ab voluptate dolores eos cupiditate. Recusandae,
        ipsam perspiciatis id repudiandae veniam officiis, illo, ipsa ut odio
        quod quibusdam soluta deleniti vel beatae quo ad qui? Repudiandae, ad.
      </p>
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
