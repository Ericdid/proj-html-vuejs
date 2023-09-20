<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div
    class="jumbotron d-flex justify-content-center align-items-center text-center"
  >
    <div>
      <h3>Lorem ipsum dolor sit amet</h3>
      <br />
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
        molestias?
      </h2>
      <br />
      <span class="button-gd">ABOUT US</span>
      <span class="button-gr">OUR HISTORY</span>
    </div>
    <span class="arw-left">&#10094;</span>
    <span class="arw-right">&#10095;</span>
  </div>
</template>

<style lang="scss" scoped>
// this is the jumbotron and elements inside of it
.jumbotron {
  background-image: url("../assets/img/H3-slider3.jpg");
  height: 800px;
  position: relative;
  color: white;
  .button-gd {
    background-color: goldenrod;
    color: #f9f9f9;
    padding: 15px 30px;
    margin-right: 20px;
    border-radius: 0 20px;
    cursor: pointer;
    font-weight: 600;
  }
  .button-gd:hover {
    background-color: rgb(37, 116, 102);
  }
  .button-gr {
    background-color: rgb(37, 116, 102);
    color: #f9f9f9;
    padding: 15px 30px;
    border-radius: 0 20px;
    cursor: pointer;
    font-weight: 600;
  }
  .button-gr:hover {
    background-color: goldenrod;
  }
}
// those are the arrows for the carousel
.arw-left {
  position: absolute;
  cursor: pointer;
  padding: 30px 20px;
  left: 15px;
  top: 50%;
}
.arw-right {
  position: absolute;
  cursor: pointer;
  padding: 30px 20px;
  right: 15px;
  top: 50%;
}
</style>
