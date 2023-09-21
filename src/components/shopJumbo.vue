<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div
    class="d-flex container jumboshop text-center align-items-center flex-column"
  >
    <div class="title">
      <p class="golden"><strong>Trending Online Store</strong></p>
      <h3>GOGRIN ALL <span class="golden">ORGANIC </span>FOOD</h3>
    </div>

    <ul class="d-flex">
      <li>All Product</li>
      <li>Apple</li>
      <li>Food</li>
      <li>Orange</li>
      <li>Vegetable</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.jumboshop {
  color: white;
  height: 800px;
  margin-top: 300px;
  background-image: url("../assets/img/shop-bg-img.jpg");
  position: relative;
  .title {
    margin-top: 100px;
    p {
      font-size: x-large;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: small;
      padding: 0px 25px;
    }
  }
}

// color palette
.golden {
  color: goldenrod;
}
</style>
