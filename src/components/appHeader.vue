<script>
export default {};
</script>

<template>
  <!-- this is the green header with company Info -->
  <div class="header-top d-flex justify-content-around align-items-center">
    <!-- left menu with location and Email Adress -->
    <div class="left-tp-menu d-flex">
      <div class="me-3">
        <font-awesome-icon icon="fa-solid fa-location-dot" />
        Location
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-envelope" />
        Email Adress@demo.com
      </div>
    </div>
    <!-- this is the right menu with working hours and social pages -->
    <div class="right-tp-menu d-flex">
      <div class="me-3">
        <font-awesome-icon icon="fa-regular fa-clock" />
        8.30AM-8.30PM
      </div>
      <div>
        <font-awesome-icon class="me-2" icon="fa-brands fa-facebook-f" />
        <font-awesome-icon class="me-2" icon="fa-brands fa-twitter" />
        <font-awesome-icon class="me-2" icon="fa-brands fa-instagram" />
        <font-awesome-icon class="me-2" icon="fa-brands fa-pinterest-p" />
      </div>
    </div>
  </div>
  <!-- this is the header with navigation bar and shopping data -->
  <div class="header-bottom d-flex align-items-center">
    <!-- left header with logo and navbar -->
    <div class="left-bt-menu d-flex">
      <img src="../assets/img/logo.png" alt="" />
      <div class="d-flex">
        <ul class="d-flex align-items-center h-100">
          <li class="dropdown">
            Home &#709;
            <div class="dropdown-content">
              <p class="content">Home-1</p>
              <p class="content">Home-2</p>
              <p class="content">Home-3</p>
              <p class="content">Home-4</p>
              <p class="content">Home-5</p>
            </div>
          </li>
          <li class="dropdown">
            About &#709;
            <div class="dropdown-content">
              <p class="content">Home-1</p>
              <p class="content">Home-2</p>
              <p class="content">Home-3</p>
              <p class="content">Home-4</p>
              <p class="content">Home-5</p>
            </div>
          </li>
          <li>Service</li>
          <li class="dropdown">
            Portfolio &#709;
            <div class="dropdown-content">
              <p class="content">Home-1</p>
              <p class="content">Home-2</p>
              <p class="content">Home-3</p>
              <p class="content">Home-4</p>
              <p class="content">Home-5</p>
            </div>
          </li>
          <li class="dropdown">
            Shop &#709;
            <div class="dropdown-content">
              <p class="content">Home-1</p>
              <p class="content">Home-2</p>
              <p class="content">Home-3</p>
              <p class="content">Home-4</p>
              <p class="content">Home-5</p>
            </div>
          </li>
          <li class="dropdown">
            Blog &#709;
            <div class="dropdown-content">
              <p class="content">Home-1</p>
              <p class="content">Home-2</p>
              <p class="content">Home-3</p>
              <p class="content">Home-4</p>
              <p class="content">Home-5</p>
            </div>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div
      class="right-bt-menu d-flex justify-content-between align-items-center"
    >
      <div class="g-circled">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="g-circled"
        />
      </div>
      <div class="shop-nav">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        <div class="shop-circle g-circled">
          <span class="shop-number">0</span>
        </div>
      </div>
      <div>prova</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-top {
  background-color: rgb(37, 116, 102);
  color: white;
  width: 100%;
  height: 40px;
}
.header-bottom {
  height: 100px;
  background-color: aquamarine;
  // this is the left section
  .left-bt-menu {
    width: 60%;
    margin-left: 10%;
  }
  // style of navbar and dropdown
  ul {
    list-style-type: none;
    li {
      padding: 0 10px;
      cursor: pointer;
      font-weight: 500;
    }
    li:hover {
      color: goldenrod;
    }
    .dropdown {
      position: relative;
      .dropdown-content {
        color: black;
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 12px 16px;
        z-index: 1;
      }
    }
    .dropdown:hover > .dropdown-content {
      display: block;
    }
    .content:hover {
      color: goldenrod;
    }
  }
  // this is the right section
  .right-bt-menu {
    width: 10%;
    height: 100%;
    // this is the search icon
    .g-circled {
      background-color: goldenrod;
      color: white;
      padding: 5px;
      border-radius: 50%;
    }
    // this is the shop icon
    .shop-nav {
      position: relative;
      .shop-circle {
        display: inline-block;
        position: absolute;
        text-align: center;
        width: 20px;
        height: 20px;
        bottom: 12px;
        left: 15px;
        .shop-number {
          position: absolute;
          left: 6px;
          bottom: -2px;
        }
      }
    }
  }
}
</style>
