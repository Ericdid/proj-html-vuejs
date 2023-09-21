<script>
export default {
  data() {
    return {
      shopList: [
        {
          image: "../src/assets/img/s5.jpg",
          name: "Fress Apple",
          price: "$18",
        },
        {
          image: "../src/assets/img/s2.jpg",
          name: "Fress Coble",
          price: "$18",
          sale: "$15",
        },
        {
          image: "../src/assets/img/s8.jpg",
          name: "Fresh Watermelon",
          price: "$18",
        },
        {
          image: "../src/assets/img/s1.jpg",
          name: "Organic Juice",
          price: "$18",
          sale: "$15",
        },
        {
          image: "../src/assets/img/s4.jpg",
          name: "Fresh Blueberries",
          price: "$18",
        },
        {
          image: "../src/assets/img/s10.jpg",
          name: "Organic Letus",
          price: "$18",
        },
        {
          image: "../src/assets/img/s9.jpg",
          name: "Red Gajor",
          price: "$18",
          sale: "$15",
        },
        {
          image: "../src/assets/img/s7.jpg",
          name: "Naga Pepper",
          price: "$18",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- this is the container of the shop -->
  <div
    class="d-flex container jumboshop text-center align-items-center flex-column"
  >
    <!-- title of the shop -->
    <div class="title">
      <p class="golden"><strong>Trending Online Store</strong></p>
      <h3>GOGRIN ALL <span class="golden">ORGANIC </span>FOOD</h3>
    </div>
    <!-- this is the navbar -->
    <ul class="d-flex">
      <li>All Product</li>
      <li>Apple</li>
      <li>Food</li>
      <li>Orange</li>
      <li>Vegetable</li>
    </ul>
    <!-- this is the shoplist -->
    <div class="d-flex flex-row row col-md-12">
      <div class="col" v-for="element in shopList">
        <img :src="element.image" alt="" />
        <p class="strong m-0">{{ element.name }}</p>
        <span class="golden">{{ element.price }}</span>
      </div>
    </div>
    <span class="golden-button">ALL PRODUCTS</span>
  </div>
</template>

<style lang="scss" scoped>
.jumboshop {
  color: white;
  height: 1000px;
  margin-top: 150px;
  background-image: url("../assets/img/shop-bg-img.jpg");
  position: relative;
  z-index: 1;
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
  .golden-button {
    background-color: goldenrod;
    color: #f9f9f9;
    padding: 15px 30px;
    margin-top: 30px;
    border-radius: 0 20px;
    cursor: pointer;
    font-weight: 600;
  }
}

// Utils
.strong {
  font-weight: 800;
}
.golden {
  color: goldenrod;
}
</style>
