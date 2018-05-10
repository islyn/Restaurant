<template>
  <div class="wrapper">
    <top-nav></top-nav>
    <shop-car-box></shop-car-box>
    <footer-box></footer-box>
  </div>
</template>

<script>
    import TopNav from "../components/TopNav";
    import ShopCarBox from "../components/ShopCarBox";
    import FooterBox from "../components/FooterBox";
    export default {
        name: "ShopCar",
      components: {FooterBox, ShopCarBox, TopNav}
    }
</script>

<style scoped>

</style>
