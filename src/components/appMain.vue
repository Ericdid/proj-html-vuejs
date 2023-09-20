<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!-- this is the jumbotron -->
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
  <!-- this is the section with product info -->
  <div
    class="d-flex justify-content-center align-items-center text-center product-info"
  >
    <div class="container d-flex product-text">
      <div class="large-txt">
        <span class="gold-txt">Lorem ipsum dolor</span> sit amet consectetur
        adipisicing elit. Eaque porro id ipsa
        <span class="gold-txt">labore expedita iusto</span> blanditiis dicta
        error distinctio quis!
      </div>
      <div class="small-txt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
        praesentium suscipit in blanditiis esse neque quo! Praesentium dolor
        iusto Lorem ipsum dolor sit amet,
        <span class="gold-txt">consectetur adipisicing elit.</span>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        exercitationem asperiores ea animi perspiciatis
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// this is the style of the jumbotron and elements inside of it
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
// those are the style of the arrows for the carousel
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
// this is the style of the product info
.product-info {
  height: 500px;
  .product-text {
    height: 50%;
    color: rgb(37, 116, 102);
    font-weight: 900;
    font-size: x-large;
    .large-txt {
      width: 50%;
      text-align: left;
    }
    .gold-txt {
      color: goldenrod;
    }
    .small-txt {
      width: 50%;
      text-align: left;
      color: black;
      font-size: medium;
      font-weight: 100;
    }
  }
}
</style>
