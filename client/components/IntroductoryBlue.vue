<template>
  <section class="bg-blue my-15 py-16 px-2 mx-n2" :style="backgroundSkew">
    <img
      src="/finger1.svg"
      class="finger-1" 
      :style="fontSkew"
    />
    <img
      src="/finger2.svg"
      class="finger-2"
      :style="fontSkew"
    >
      <div :style="fontSkew">
        <h2>
          <center>
            {{ title }}
          </center>
        </h2>
        <div style="max-width: 600px;" class="mx-auto mt-10">
          <center> {{ text }} </center>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    backgroundSkew: {
      type: String,
      default: 'transform: skewY(-5deg);'
    },
    fontSkew: {
      type: String,
      default: 'transform: skewY(5deg);'
    }
  }
}
</script>

<style>
  .bg-blue {
    background-color: #03004e;
    height: 350px;
    padding: 6em 0;
    overflow: hidden;
    color: #acadb7;
  }
  .finger-1 {
    left: 0;
    width: 42%;
    bottom: -20px;
    position: absolute;
  }
  .finger-2 {
    right: 0;
    width: 42%;
    top: -10px;
    position: absolute;
  }
</style>