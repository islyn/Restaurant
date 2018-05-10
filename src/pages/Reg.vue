<template>
  <div class="wrapper">
    <top-nav></top-nav>
    <RegBox></RegBox>
    <footer-box></footer-box>
  </div>
</template>

<script>
    import TopNav from "../components/TopNav";
    import FooterBox from "../components/FooterBox";
    import RegBox from "../components/RegBox";
    export default {
      name: "Login",
      components: {RegBox, FooterBox, TopNav}
    }
</script>

<style scoped>

  .wrapper{
    width: 100%;
    height: 100%;
    /*border: 1px solid black;*/
  }

</style>
