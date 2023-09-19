<script>
export default {};
</script>

<template>
  <div class="d-flex header">
    <!-- this is the green header with company Info -->
    <div class="header-top d-flex justify-content-around align-items-center">
      <!-- left menu with location and Email Adress -->
      <div class="left-menu d-flex">
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
      <div class="right-menu d-flex">
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
    <div class="header-bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
.header-top {
  background-color: rgb(37, 116, 102);
  color: white;
  width: 100%;
  height: 40px;
}
</style>
