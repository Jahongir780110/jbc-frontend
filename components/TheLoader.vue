<template>
  <transition name="fade">
    <div class="wrapper">
      <div class="loader">
        <div class="tall-stack">
          <div class="butter falling-element"></div>
          <div class="pancake falling-element"></div>
          <div class="pancake falling-element"></div>
          <div class="pancake falling-element"></div>
          <div class="pancake falling-element"></div>
          <div class="pancake falling-element"></div>
          <div class="pancake falling-element"></div>
          <div class="plate">
            <div class="plate-bottom"></div>
            <div class="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
$color-pancake: #c4b26f;
$color-pancake: #d8cb9f;
$color-pancake-dark: darken($color-pancake, 50%);
$color-butter: #eadd4d;
$color-bg: #073b4c;
$color-plate: #d3ebea;

$animation-duration: 6000ms;

.wrapper {
  width: 100%;
  height: 100vh;
  background: $color-bg;
  overflow: hidden;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tall-stack {
  animation: slide-plate-out $animation-duration infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.plate {
  width: 230px;
  height: 14px;
  background: $color-plate;
  position: relative;
  border-radius: 6px 6px 2rem 2rem;
  animation: slide-plate-in $animation-duration infinite;
  transform: translateX(100vw);
  animation-fill-mode: forwards;
  animation-timing-function: ease;

  .plate-bottom {
    content: '';
    display: block;
    height: 50%;
    width: 140px;
    background: darken($color-plate, 4%);
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -70px;
    border-radius: 0 0 1rem 1rem;
    z-index: 1;
  }

  .shadow {
    position: absolute;
    top: 130%;
    left: 50%;
    margin-left: -90px;
    z-index: 0;
    width: 180px;
    height: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 80%;
  }
}

.butter {
  width: 48px;
  height: 12px;
  background: $color-butter;
  margin: auto;
  border-radius: 2px;
  box-shadow: inset 0 -2px 0 2px rgba($color-pancake-dark, 0.1);
}

.pancake {
  width: 200px;
  height: 14px;
  background: $color-pancake;
  border-radius: 1rem;
  box-shadow: inset 0 -2px 0 3px rgba($color-pancake-dark, 0.1);
  margin: auto;
}

.falling-element {
  position: relative;
  transform: translateY(-100vh);
  animation: element-drop $animation-duration infinite;
  animation-timing-function: ease-in;
  animation-fill-mode: forward;
}

$elements: 8;
$drop-delay: 0.4s;
$drop-interval: 0.22;
@for $i from 0 to $elements {
  .falling-element:nth-child(#{$elements - $i}) {
    animation-delay: ($drop-interval * $i) + $drop-delay;
  }
}

@keyframes element-drop {
  0%,
  100% {
    transform: translateY(-100vh) scaleY(0.7);
    opacity: 1;
  }
  11% {
    transform: translateY(20%) scaleY(1.2);
  }
  13% {
    transform: translateY(-30%) scaleY(0.9);
  }
  14%,
  67% {
    transform: translateY(0%) scaleY(1);
    opacity: 1;
  }
  68% {
    opacity: 0;
    transition: none;
    transform: translateY(-100vh) scaleY(0.7);
  }
}

@keyframes slide-plate-in {
  0% {
    transform: translateX(100vw);
  }
  15%,
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-plate-out {
  65% {
    transform: translateX(0);
  }
  85%,
  100% {
    transform: translateX(-100vw);
  }
}
</style>
