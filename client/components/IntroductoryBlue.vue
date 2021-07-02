<template>
  <section class="bg-blue my-15 px-2 mx-n2">

    <img src="/finger1.svg" class="finger-1">
    <img src="/finger2.svg" class="finger-2">
    
    <div class="bg-container">
      <h2>
        <center>
          {{ title }}
        </center>
      </h2>
      <div style="max-width: 600px;" class="mx-auto text-justify mt-md-7 mt-3">
        {{ text }}
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
    }
  }
}
</script>

<style>
  .bg-blue {
    background-color: #03004e;
    transform: skewY(-5deg);
    height: 320px;
    padding: 6em 0;
    overflow: hidden;
    color: #acadb7;
  }
  .finger-1 {
    left: 0;
    width: 42%;
    transform: skewY(5deg);
    bottom: -20px;
    position: absolute;
  }
  .finger-2 {
    right: 0;
    width: 42%;
    transform: skewY(5deg);
    top: -10px;
    position: absolute;
  }
  .bg-container {
    transform: skewY(5deg);
  }
</style>